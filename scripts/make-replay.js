// Writes public/replay.json: the baseline v2 grid plus every Kane run of the most recent
// full loop, in time order, so the deployed dashboard can play back a real run.
//
//   npm run replay:make
//
// The "full loop" is the one started on 21 Nov 2026 (resumed on 22 Nov after the PC slept).
// Two earlier one-pair trial runs are left out. Round 3 is the manual rechecks: the Hausa
// bill after the pay_bill fix, then the last 7 red pairs after the 24-hour time and
// tile-icon fixes on 23 Nov. Each carries its own note.

import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { baselineStatus } from './loop.js'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const LOOP_START = '2026-11-21T14:00:00Z'

const runs = readFileSync(join(ROOT, 'loop-log', 'runs.jsonl'), 'utf8')
  .split(/\r?\n/).filter(Boolean).map((l) => JSON.parse(l))
  .filter((r) => r.ts >= LOOP_START)
  .sort((a, b) => a.ts.localeCompare(b.ts))
  .map(({ ts, round, lang, flow, status, label, reason, credits, note }) => ({
    ts, round, lang, flow, status, label: label ?? null, credits: credits ?? null,
    reason: status === 'pass' ? '' : reason,
    ...(round === 3 ? { note: note ? note[0].toUpperCase() + note.slice(1) : 'Manual recheck after adding the Hausa pay_bill key' } : {}),
  }))

const day = (ts) => new Date(ts).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })
const first = runs[0].ts
const last = runs.at(-1).ts
const replay = {
  date: day(first) === day(last) ? day(first) : `${day(first)} to ${day(last)}`,
  baseline: baselineStatus(),
  runs,
}
writeFileSync(join(ROOT, 'public', 'replay.json'), JSON.stringify(replay, null, 2) + '\n')
console.log(`public/replay.json: ${runs.length} runs, ${replay.date}`)
