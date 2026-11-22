// The closed loop: Kane finds failures, Claude Code fixes the app, Kane checks the fix.
//
//   npm run loop                         every failing pair, up to 3 rounds
//   npm run loop -- --only ig/airtime    just one pair (for a trial run)
//   npm run loop -- --rounds 1           stop after one round
//   npm run loop -- --dry                read status and plan, run nothing
//
// Each round:
//   1. Runs Kane on every failing lang/flow pair, one at a time.
//   2. Sends the failures Kane labels application_issue to Claude Code (claude -p),
//      which may ONLY edit src/locales/*.json, src/index.css and src/screens/*.jsx.
//   3. Writes automation_bug / tool failures to loop-log/test-issues.md for a human.
//      Tests are never changed by the loop.
//   4. Commits the round if the app changed, then reruns only the pairs that just failed.
//
// After every Kane run it updates public/status.json (read by public/dashboard.html)
// and appends a line to loop-log/runs.jsonl.
// Credit guard: never more than MAX_RUNS Kane runs per invocation.

import { spawn, spawnSync } from 'node:child_process'
import {
  readFileSync, writeFileSync, appendFileSync, existsSync, mkdirSync, rmSync,
  readdirSync, copyFileSync, renameSync, statSync,
} from 'node:fs'
import { join, dirname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { homedir } from 'node:os'

// LOOP_ROOT lets the edit-scope logic be tested against a throwaway repo.
const ROOT = process.env.LOOP_ROOT || join(dirname(fileURLToPath(import.meta.url)), '..')
const LANGS = ['en', 'pcm', 'yo', 'ig', 'ha']
const FLOWS = ['signup', 'airtime', 'bill', 'history', 'empty_history']
const MAX_RUNS = 40
const MAX_ROUNDS_DEFAULT = 3

const STATUS_FILE = join(ROOT, 'public', 'status.json')
const LOG_DIR = join(ROOT, 'loop-log')
const RUNS_FILE = join(LOG_DIR, 'runs.jsonl')
const ISSUES_FILE = join(LOG_DIR, 'test-issues.md')

// Files Claude may change. Anything else it touches is reverted.
const ALLOWED_EDITS = [/^src\/locales\/[^/]+\.json$/, /^src\/index\.css$/, /^src\/screens\/[^/]+\.jsx$/]

// ---------- arguments ----------
const args = process.argv.slice(2)
const argValue = (name) => {
  const i = args.indexOf(name)
  return i >= 0 ? args[i + 1] : undefined
}
const ONLY = argValue('--only') // e.g. "ig/airtime"
const MAX_ROUNDS = Number(argValue('--rounds') || MAX_ROUNDS_DEFAULT)
const DRY = args.includes('--dry')
// --resume: a previous loop died part-way through round 1 with no fix committed since.
// Reuse its round-1 failures from runs.jsonl instead of paying to rerun unchanged code.
const RESUME = args.includes('--resume')

function resumedFailures() {
  if (!existsSync(RUNS_FILE)) return new Map()
  const last = new Map()
  for (const line of readFileSync(RUNS_FILE, 'utf8').split(/\r?\n/)) {
    if (!line.trim()) continue
    const r = JSON.parse(line)
    if (r.round === 1) last.set(`${r.lang}/${r.flow}`, r)
  }
  const out = new Map()
  for (const [key, r] of last) {
    if (r.status !== 'fail') continue
    const resultCopy = `loop-log/results/round1/${r.lang}/${r.flow}.md`
    const screens = [1, 2, 3].map((i) => `loop-log/screens/round1/${r.lang}-${r.flow}-${i}.png`)
      .filter((p) => existsSync(join(ROOT, p)))
    out.set(key, {
      lang: r.lang, flow: r.flow, status: 'fail', label: r.label, failedStep: r.failedStep, reason: r.reason,
      resultCopy: existsSync(join(ROOT, resultCopy)) ? resultCopy : null, screens,
    })
  }
  return out
}

// ---------- small helpers ----------
const log = (...m) => console.log(`[loop ${new Date().toLocaleTimeString()}]`, ...m)
const sh = (cmd, cmdArgs) =>
  spawnSync(cmd, cmdArgs, { cwd: ROOT, encoding: 'utf8', shell: false }).stdout?.trim() ?? ''

function writeJsonAtomic(file, data) {
  mkdirSync(dirname(file), { recursive: true })
  const tmp = `${file}.tmp`
  writeFileSync(tmp, JSON.stringify(data, null, 2) + '\n')
  try {
    renameSync(tmp, file)
  } catch {
    // Windows can refuse a rename while the dev server is reading the file.
    writeFileSync(file, JSON.stringify(data, null, 2) + '\n')
    rmSync(tmp, { force: true })
  }
}

// ---------- reading Kane's Result.md ----------
// Returns { status, failedStep, reason, label } where label is
// "application_issue", "automation_bug" or "tool_issue" (failed with no verdict).
export function parseResult(text) {
  const status = /^status:\s*(\w+)/m.exec(text)?.[1] ?? 'unknown'
  if (status === 'passed') return { status: 'pass', failedStep: null, reason: '', label: null }
  const failedStep = /^## (.+?) ✗ failed/m.exec(text)?.[1] ?? null
  const reasonLine = /^Reason:\s*(.+)$/m.exec(text)?.[1]?.trim() ?? 'No reason given'
  const verdict = /\[(application_issue|automation_bug)\/[\w_]+/.exec(reasonLine)
  const label = verdict ? verdict[1] : 'tool_issue'
  return { status: 'fail', failedStep, reason: reasonLine, label }
}

function findResultDir(lang, flow) {
  // Kane sometimes leaves the result in output-<flow>.staging instead of output-<flow>.
  const candidates = [`output-${flow}`, `output-${flow}.staging`]
    .map((d) => join(ROOT, 'flows', lang, d))
    .filter((d) => existsSync(join(d, 'Result.md')))
  candidates.sort((a, b) => statSync(join(b, 'Result.md')).mtimeMs - statSync(join(a, 'Result.md')).mtimeMs)
  return candidates[0] ?? null
}

// ---------- status ----------
function initialStatus() {
  if (existsSync(STATUS_FILE)) return JSON.parse(readFileSync(STATUS_FILE, 'utf8'))
  return baselineStatus()
}

// The red starting point: baseline-v2's results. English is not in it: all 5 English
// flows passed in the check that ran just before baseline v2. (Also used by demo-reset.)
export function baselineStatus() {
  const status = {}
  for (const lang of LANGS) {
    status[lang] = {}
    for (const flow of FLOWS) {
      const file = join(ROOT, 'baseline-v2', lang, flow, 'Result.md')
      if (lang === 'en') {
        status[lang][flow] = { status: 'pass', round: 0, reason: 'English check before baseline v2' }
      } else if (existsSync(file)) {
        const r = parseResult(readFileSync(file, 'utf8'))
        status[lang][flow] = { status: r.status, round: 0, reason: r.reason }
      } else {
        status[lang][flow] = { status: 'fail', round: 0, reason: 'No baseline result' }
      }
    }
  }
  return status
}

// ---------- one Kane run ----------
function runKane(lang, flow, round) {
  return new Promise((resolve) => {
    // Clear old results so we never read a stale Result.md.
    for (const d of [`output-${flow}`, `output-${flow}.staging`]) {
      rmSync(join(ROOT, 'flows', lang, d), { recursive: true, force: true })
    }
    const rawDir = join(LOG_DIR, 'raw')
    mkdirSync(rawDir, { recursive: true })
    const rawFile = join(rawDir, `round${round}-${lang}-${flow}.ndjson`)
    const started = Date.now()
    // stdin is not a terminal, so Kane never shows the "View evidence in browser?" prompt
    // (that is the same as answering N).
    const child = spawn('kane-cli', ['testmd', 'run', `flows/${lang}/${flow}_test.md`, '--agent'], {
      cwd: ROOT,
      shell: true,
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, KANE_CLI_USER_AGENT: 'wetinbreak-loop' },
    })
    let out = ''
    child.stdout.on('data', (d) => { out += d })
    child.stderr.on('data', (d) => { out += d })
    child.on('close', (code) => {
      writeFileSync(rawFile, out)
      resolve({ exit: code ?? 1, raw: out, seconds: Math.round((Date.now() - started) / 1000) })
    })
  })
}

// Copy the last few screenshots Kane took into the project so Claude can open them.
function collectScreenshots(raw, lang, flow, round) {
  const paths = [...raw.matchAll(/"screenshot_path":"([^"]+)"/g)].map((m) => m[1].replace(/\\\\/g, '\\'))
  const dir = join(LOG_DIR, 'screens', `round${round}`)
  mkdirSync(dir, { recursive: true })
  return paths.slice(-3).flatMap((src, i) => {
    if (!existsSync(src)) return []
    const dest = join(dir, `${lang}-${flow}-${i + 1}.png`)
    copyFileSync(src, dest)
    return [relative(ROOT, dest).replaceAll('\\', '/')]
  })
}

function creditsUsed(raw) {
  const values = new Set([...raw.matchAll(/"credits_consumed":([\d.]+)/g)].map((m) => m[1]))
  return Math.round([...values].reduce((s, v) => s + Number(v), 0))
}

// ---------- Claude Code ----------
function findClaude() {
  if (process.env.CLAUDE_BIN) return process.env.CLAUDE_BIN
  const onPath = spawnSync(process.platform === 'win32' ? 'where' : 'which', ['claude'], { encoding: 'utf8' })
  if (onPath.status === 0) {
    const hits = onPath.stdout.split(/\r?\n/).map((s) => s.trim()).filter(Boolean)
    if (process.platform !== 'win32') return hits[0]
    // Node cannot start npm's claude.cmd wrapper without cmd.exe (which would mangle the
    // long prompt), so use a real .exe: either on PATH, or the one the npm wrapper calls.
    const exe = hits.find((h) => h.toLowerCase().endsWith('.exe'))
    if (exe) return exe
    for (const h of hits) {
      const npmExe = join(dirname(h), 'node_modules', '@anthropic-ai', 'claude-code', 'bin', 'claude.exe')
      if (existsSync(npmExe)) return npmExe
    }
  }
  // Fall back to the copy bundled with the Claude desktop app (newest version).
  const base = join(process.env.LOCALAPPDATA || join(homedir(), 'AppData', 'Local'), 'Claude-Data')
  const found = []
  const walk = (d, depth) => {
    if (depth > 5 || !existsSync(d)) return
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name)
      if (e.isDirectory()) walk(p, depth + 1)
      else if (e.name === 'claude.exe') found.push(p)
    }
  }
  walk(base, 0)
  found.sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs)
  return found[0] ?? null
}

function fixPrompt(appIssues) {
  const report = appIssues
    .map((f) => [
      `### ${f.lang} / ${f.flow}`,
      `- Failed step: ${f.failedStep}`,
      `- Kane's reason: ${f.reason}`,
      `- Result file: ${f.resultCopy}`,
      `- Screenshots: ${f.screens.length ? f.screens.join(', ') : 'none saved'}`,
    ].join('\n'))
    .join('\n\n')
  return `You are fixing the WetinBreak Pay React app (Vite, react-i18next). Kane CLI end-to-end tests
failed in the languages below, and Kane labelled each failure as an application issue.

Fix the app so these tests pass.

Rules:
- You may ONLY edit src/locales/*.json, src/index.css and src/screens/*.jsx.
- Never edit flows/ or scripts/, and never weaken or delete a test check.
- Fix root causes: use t('key') instead of hardcoded English text, add missing keys to the locale
  files (keep every locale's keys in line with src/locales/en.json), and make buttons grow to fit
  their text instead of using fixed widths or heights.
- Every visible string must come from src/locales/en.json and its translations.
- You may read any file, including the test flows in flows/<lang>/ and the Result.md files.

Failures:

${report}

When you are done, end your reply with exactly one line:
SUMMARY: <what you fixed, under 60 characters>`
}

function runClaude(prompt) {
  const bin = findClaude()
  if (!bin) return { ok: false, output: 'Claude Code CLI not found (set CLAUDE_BIN or install it).' }
  log(`Asking Claude Code to fix the app (${relative(ROOT, bin) || bin})...`)
  const result = spawnSync(bin, [
    '-p', prompt,
    '--max-turns', '40',
    // Permission scope: read anything, edit only these files, no shell, no new files.
    '--allowedTools', 'Read', 'Glob', 'Grep',
    'Edit(src/locales/**)', 'Edit(src/index.css)', 'Edit(src/screens/**)',
    '--disallowedTools', 'Bash', 'Write', 'NotebookEdit', 'WebFetch', 'WebSearch',
  ], { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 20 * 60 * 1000 })
  const output = `${result.stdout ?? ''}${result.stderr ?? ''}`.trim()
  const ok = result.status === 0 && !/Not logged in/i.test(output)
  return { ok, output }
}

const loopOwned = (f) => f.startsWith('loop-log/') || f === 'public/status.json'

// The exact bytes of every file that differs from HEAD or is untracked (null = deleted).
// Taken just before the fixer runs, so its edits can be told apart from work that was
// already uncommitted. Files the loop itself writes are left out.
export function snapshotDirty() {
  const names = [
    ...sh('git', ['diff', '--name-only', 'HEAD']).split(/\r?\n/),
    ...sh('git', ['ls-files', '--others', '--exclude-standard']).split(/\r?\n/),
  ].filter((f) => f && !loopOwned(f))
  const snap = new Map()
  for (const f of new Set(names)) {
    const p = join(ROOT, f)
    snap.set(f, existsSync(p) ? readFileSync(p) : null)
  }
  return snap
}

const sameBytes = (a, b) => (a === null || b === null ? a === b : a.equals(b))

// Undo anything the fixer changed outside the allowed files (belt and braces on top of
// the permission flags), and return the allowed files it changed.
// Only changes made DURING the fixer's turn count: a file is restored to the bytes it had
// in `before`, never to HEAD, so uncommitted work from before the turn is never lost.
export function enforceEditScope(before) {
  const after = snapshotDirty()
  const kept = []
  for (const f of new Set([...before.keys(), ...after.keys()])) {
    const was = before.has(f) ? before.get(f) : undefined // undefined: matched HEAD before
    const now = after.has(f) ? after.get(f) : undefined
    if (was !== undefined && now !== undefined && sameBytes(was, now)) continue // untouched
    if (ALLOWED_EDITS.some((re) => re.test(f))) {
      kept.push(f)
      continue
    }
    log(`Undoing out-of-scope change made during the fix: ${f}`)
    const p = join(ROOT, f)
    if (was === undefined) {
      // It matched HEAD (or did not exist) before the fixer ran.
      if (sh('git', ['ls-files', '--', f])) spawnSync('git', ['checkout', 'HEAD', '--', f], { cwd: ROOT })
      else rmSync(p, { force: true })
    } else if (was === null) {
      rmSync(p, { force: true })
    } else {
      mkdirSync(dirname(p), { recursive: true })
      writeFileSync(p, was)
    }
  }
  return kept
}

function commitRound(round, summary, files) {
  spawnSync('git', ['add', '--', ...files, 'public/status.json', 'loop-log'], { cwd: ROOT })
  const message = `loop round ${round}: ${summary}\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`
  const r = spawnSync('git', ['commit', '-q', '-m', message], { cwd: ROOT, encoding: 'utf8' })
  log(r.status === 0 ? `Committed "loop round ${round}: ${summary}"` : `Commit failed: ${r.stderr}`)
}

function recordTestIssues(round, issues) {
  if (!issues.length) return
  if (!existsSync(ISSUES_FILE)) {
    writeFileSync(ISSUES_FILE, '# Test issues for human review\n\n' +
      'Failures Kane did not blame on the app (automation_bug), or that ended with no verdict at all\n' +
      '(tool_issue). The loop never changes tests to make them pass: review each one yourself.\n')
  }
  const rows = issues.map((f) =>
    `| ${f.lang} / ${f.flow} | ${f.failedStep ?? '?'} | ${f.label} | ${f.reason.replaceAll('|', '\\|')} |`)
  appendFileSync(ISSUES_FILE, `\n## Round ${round} (${new Date().toISOString()})\n\n` +
    '| Flow | Failed step | Label | Kane\'s reason |\n|---|---|---|---|\n' + rows.join('\n') + '\n')
}

// ---------- main ----------
async function main() {
  mkdirSync(LOG_DIR, { recursive: true })
  const dirtyAtStart = [...snapshotDirty().keys()]
  if (dirtyAtStart.length) {
    log(`Note: uncommitted changes the loop will leave alone: ${dirtyAtStart.join(', ')}`)
    log('      (If the fixer edits one of these, the round commit will include your earlier changes too.)')
  }
  const status = initialStatus()
  writeJsonAtomic(STATUS_FILE, status)

  let pairs = LANGS.flatMap((lang) => FLOWS.map((flow) => ({ lang, flow })))
    .filter(({ lang, flow }) => status[lang][flow].status !== 'pass')
  if (ONLY) pairs = pairs.filter(({ lang, flow }) => `${lang}/${flow}` === ONLY)
  log(`${pairs.length} failing pair(s) to run: ${pairs.map((p) => `${p.lang}/${p.flow}`).join(', ') || 'none'}`)
  if (DRY || !pairs.length) return

  let runs = 0
  let credits = 0
  for (let round = 1; round <= MAX_ROUNDS && pairs.length; round++) {
    const toRun = round === 1 && RESUME ? pairs.filter((p) => !resumedFailures().has(`${p.lang}/${p.flow}`)).length : pairs.length
    if (runs + toRun > MAX_RUNS) {
      log(`CREDIT GUARD: round ${round} needs ${pairs.length} runs, ${runs} already done, limit ${MAX_RUNS}. Stopping.`)
      break
    }
    log(`===== Round ${round}: ${pairs.length} run(s) =====`)
    const failures = []
    const reused = round === 1 && RESUME ? resumedFailures() : new Map()
    if (reused.size) log(`Resuming: reusing ${reused.size} round-1 result(s) from runs.jsonl (no Kane run, no credits).`)

    for (const { lang, flow } of pairs) {
      const prev = reused.get(`${lang}/${flow}`)
      if (prev) {
        failures.push(prev)
        status[lang][flow] = { status: 'fail', round, reason: prev.reason }
        writeJsonAtomic(STATUS_FILE, status)
        log(`  ${lang}/${flow}: FAIL (reused) [${prev.label}] ${prev.reason}`)
        continue
      }
      status[lang][flow] = { status: 'running', round, reason: '' }
      writeJsonAtomic(STATUS_FILE, status)
      log(`Kane: ${lang}/${flow} ...`)

      const { exit, raw, seconds } = await runKane(lang, flow, round)
      runs++
      const used = creditsUsed(raw)
      credits += used

      const dir = findResultDir(lang, flow)
      let result
      let resultCopy = null
      if (dir) {
        const text = readFileSync(join(dir, 'Result.md'), 'utf8')
        result = parseResult(text)
        const copyDir = join(LOG_DIR, 'results', `round${round}`, lang)
        mkdirSync(copyDir, { recursive: true })
        copyFileSync(join(dir, 'Result.md'), join(copyDir, `${flow}.md`))
        resultCopy = `loop-log/results/round${round}/${lang}/${flow}.md`
      } else {
        result = { status: 'fail', failedStep: null, reason: 'Kane produced no Result.md', label: 'tool_issue' }
      }
      // The exit code is the source of truth for pass/fail.
      if (exit === 0) result = { ...result, status: 'pass' }
      else if (result.status === 'pass') result = { ...result, status: 'fail', reason: `Kane exited ${exit}`, label: 'tool_issue' }

      status[lang][flow] = { status: result.status, round, reason: result.status === 'pass' ? '' : result.reason }
      writeJsonAtomic(STATUS_FILE, status)
      appendFileSync(RUNS_FILE, JSON.stringify({
        ts: new Date().toISOString(), round, lang, flow, exit, status: result.status,
        label: result.label, failedStep: result.failedStep, reason: result.reason, seconds, credits: used,
      }) + '\n')
      log(`  ${lang}/${flow}: ${result.status.toUpperCase()} (exit ${exit}, ${seconds}s, ~${used} credits)` +
        (result.status === 'fail' ? ` [${result.label}] ${result.failedStep}: ${result.reason}` : ''))

      if (result.status === 'fail') {
        failures.push({ lang, flow, ...result, resultCopy, screens: collectScreenshots(raw, lang, flow, round) })
      }
    }

    const appIssues = failures.filter((f) => f.label === 'application_issue')
    const testIssues = failures.filter((f) => f.label !== 'application_issue')
    recordTestIssues(round, testIssues)
    log(`Round ${round}: ${failures.length} failed (${appIssues.length} app, ${testIssues.length} test/tool).`)

    if (!failures.length) { log('Everything passes. Done.'); break }
    if (!appIssues.length) {
      log('No application issues left for Claude to fix. Test issues are in loop-log/test-issues.md. Stopping.')
      break
    }

    const before = snapshotDirty()
    const { ok, output } = runClaude(fixPrompt(appIssues))
    writeFileSync(join(LOG_DIR, `claude-round${round}.txt`), output + '\n')
    if (!ok) {
      log(`Claude Code did not run: ${output.split(/\r?\n/).slice(-2).join(' ')}`)
      log('Stopping: without a fix there is nothing to rerun.')
      break
    }
    const files = enforceEditScope(before)
    if (!files.length) {
      log('Claude Code changed no app files. Stopping (rerunning unchanged code wastes credits).')
      break
    }
    const summary = (/^SUMMARY:\s*(.+)$/m.exec(output)?.[1] ?? `fixed ${files.join(', ')}`).slice(0, 72)
    log(`Claude changed: ${files.join(', ')}`)
    commitRound(round, summary, files)

    // Vite hot-reloads the app; rerun only the pairs that just failed.
    pairs = failures.map(({ lang, flow }) => ({ lang, flow }))
  }

  const all = LANGS.flatMap((l) => FLOWS.map((f) => status[l][f].status))
  log(`Finished: ${all.filter((s) => s === 'pass').length}/25 passing, ${runs} Kane run(s), ~${credits} credits.`)
}

// Run only when started as a script, so tests can import the helpers above.
if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  main().catch((err) => {
    console.error(err)
    process.exit(1)
  })
}
