// Puts the repo in the red "before" state so a real loop run can be recorded.
//
//   npm run demo:reset            (add -- --dry to only print what it would do)
//
// 1. Creates a fresh branch demo-run-<timestamp> from demo-start (the baseline v2 commit,
//    all six planted bugs present, before loop round 1).
// 2. Copies in the CURRENT loop tooling from main, so the demo uses the latest loop and
//    dashboard: scripts/, flows/, flows-android/ (if present), public/dashboard.html, plus
//    package.json / package-lock.json (for `npm run loop`), vite.config.js (live
//    /status.json), eslint.config.js and .gitignore.
// 3. Resets public/status.json to the baseline v2 results and clears loop-log/.
// 4. Commits that on the demo branch. main is only ever read, never checked out or changed.
//
// Then: npm run dev, open /dashboard.html, and npm run loop.

import { spawnSync } from 'node:child_process'
import { existsSync, rmSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DRY = process.argv.includes('--dry')
const START = 'demo-start'
const SOURCE = 'main'
const FROM_MAIN = [
  'scripts', 'flows', 'flows-android', 'public/dashboard.html',
  'package.json', 'package-lock.json', 'vite.config.js', 'eslint.config.js', '.gitignore',
]

const git = (...args) => {
  const r = spawnSync('git', args, { cwd: ROOT, encoding: 'utf8' })
  if (r.status !== 0) throw new Error(`git ${args.join(' ')} failed:\n${r.stderr || r.stdout}`)
  return r.stdout.trim()
}
const has = (ref) => spawnSync('git', ['rev-parse', '--verify', '--quiet', ref], { cwd: ROOT }).status === 0
const say = (m) => console.log(`[demo-reset] ${m}`)

function stamp() {
  const d = new Date()
  const p = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`
}

async function main() {
  if (!has(START)) throw new Error(`branch ${START} not found. Create it at the baseline v2 commit first.`)
  if (!has(SOURCE)) throw new Error(`branch ${SOURCE} not found.`)
  const dirty = git('status', '--porcelain', '--untracked-files=no')
  if (dirty && !DRY) throw new Error(`commit or stash your changes first:\n${dirty}`)
  if (dirty) say(`warning: uncommitted changes (a real reset would stop here):\n${dirty}`)

  const branch = `demo-run-${stamp()}`
  const paths = FROM_MAIN.filter((p) => has(`${SOURCE}:${p}`))
  const current = git('rev-parse', '--abbrev-ref', 'HEAD')

  say(`now on ${current}`)
  say(`new branch ${branch} from ${START} (${git('rev-parse', '--short', START)})`)
  say(`copy from ${SOURCE} (${git('rev-parse', '--short', SOURCE)}): ${paths.join(', ')}`)
  say('reset public/status.json to baseline v2, clear loop-log/, commit on the demo branch')
  if (DRY) { say('dry run: nothing changed.'); return }

  git('switch', '-c', branch, START)
  if (git('rev-parse', '--abbrev-ref', 'HEAD') !== branch) throw new Error('not on the demo branch, stopping')

  git('checkout', SOURCE, '--', ...paths)
  rmSync(join(ROOT, 'loop-log'), { recursive: true, force: true })
  const statusFile = join(ROOT, 'public', 'status.json')
  rmSync(statusFile, { force: true })
  // Import the loop that was just copied in, so the reset matches the loop that will run.
  const { baselineStatus } = await import(pathToFileURL(join(ROOT, 'scripts', 'loop.js')).href)
  writeFileSync(statusFile, JSON.stringify(baselineStatus(), null, 2) + '\n')

  git('add', '-A', '--', ...paths, 'public/status.json')
  if (existsSync(join(ROOT, 'loop-log'))) git('add', '-A', '--', 'loop-log')
  git('commit', '-q', '-m', `demo: latest loop + dashboard on the baseline v2 app (from ${SOURCE})`)

  say(`ready on ${branch}. Next: npm install, npm run dev, open http://localhost:5173/dashboard.html, then npm run loop`)
  say(`go back with: git switch ${SOURCE}`)
}

main().catch((err) => { console.error(`[demo-reset] ${err.message}`); process.exit(1) })
