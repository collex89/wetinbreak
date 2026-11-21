# Known bugs (planted on purpose, now fixed)

WetinBreak Pay is a sample app for showing the kind of i18n bugs real apps ship with.
The six bugs below were added **deliberately** so the Kane CLI flows had something real to catch.
The "before" state, with all six bugs present, is committed twice:

- `13b8573` "Add 4 Nigerian languages + red baseline": first test run, results in [baseline/](baseline/SUMMARY.md)
- `43d9f4f` "Tighter flows + baseline v2": stricter tests, results in [baseline-v2/](baseline-v2/SUMMARY.md)

All six were fixed by hand in `28f62f3`, then **planted again** (keeping the picker polish and
centred text) so the test loop (`npm run loop`) has real failures to find. In the loop, Kane finds
them, Claude Code fixes them, and Kane checks the fix. The `loop round N` commits show what it changed.
The plant comments are not in the code this time, so the loop has to find each cause itself.

| # | Planted bug | Where | What you saw | Fix |
|---|-------------|-------|--------------|-----|
| 1 | `.primary` buttons had a fixed width (`width: 140px; white-space: nowrap; overflow: hidden`) | `src/index.css` | "Back to home" was cut off in all four new languages: Pidgin "Go back to home", Yoruba "Padà sí ojú-ìwé àkọ́kọ́", Igbo "Laghachi na ibe mbụ", Hausa "Koma shafin farko" | Full-width button that wraps (`width: 100%`, `text-wrap: balance`, `min-height` instead of a fixed size) |
| 2 | Home `.tile` buttons had a fixed height (`height: 60px; overflow: hidden`) | `src/index.css` | Dormant: no current tile label wraps, but any longer translation would have lost its second line | `min-height` instead of `height`, no clipping |
| 3 | "Processing..." hardcoded in English | `src/screens/Airtime.jsx` | The Pay button read "Processing..." in every language | Back to `t('processing')` |
| 4 | "Payment successful" hardcoded in English | `src/screens/Success.jsx` | The success heading was always English | Back to `t('payment_successful')` |
| 5 | "No transactions yet" hardcoded in English | `src/screens/History.jsx` | The empty History screen was always English | Back to `t('no_transactions')` |
| 6 | `pay_bill` key missing from `ha.json` | `src/locales/ha.json` | Hausa showed English "Pay bill" on the home tile and bill screen | Added "Biya kuɗin wuta" |

## Also changed alongside the fixes

These were not planted bugs, so be clear about them when comparing before and after:

- **UI polish:** the language picker is now a styled pill with a globe icon (it was a bare browser
  dropdown), and the language name sits centred in it. Text is centred in every button, home tile and
  network chip. The success tick is a drawn SVG instead of a "✓" text character, buttons and tiles have
  hover states, and there is a visible keyboard focus ring.
- **Tests are unchanged from baseline v2.** The tightened flows and the `?slow=1` test hook in
  `src/store.js` were committed with baseline v2, before any fix, so the before and after runs use
  the same tests.

The translations in `pcm.json`, `yo.json`, `ig.json` and `ha.json` were written with AI help and
have **not** been reviewed by native speakers yet. Wording mistakes there are not on this list.
