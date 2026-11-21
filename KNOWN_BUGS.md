# Known bugs (planted on purpose)

WetinBreak Pay is a sample app for showing the kind of i18n bugs real apps ship with.
The bugs below were added **deliberately** so the Kane CLI flows have something real to catch.
Every one is marked in the code with a `KNOWN BUG (planted)` comment.

| # | Bug | Where | What you see |
|---|-----|-------|--------------|
| 1 | `.primary` buttons have a fixed width (`width: 140px; white-space: nowrap; overflow: hidden`) | `src/index.css` | The "Back to home" button on the success screen is cut off in all four new languages: Pidgin "Go back to home", Yoruba "Padà sí ojú-ìwé àkọ́kọ́", Igbo "Laghachi na ibe mbụ", Hausa "Koma shafin farko". English labels fit. |
| 2 | Home `.tile` buttons have a fixed height (`height: 60px; overflow: hidden`) | `src/index.css` | **Dormant with the current translations.** Any label long enough to wrap onto a second line would lose that line, but none of today's tile labels wrap, even at a 320px-wide screen. It will bite the first time a longer translation is added. |
| 3 | "Processing..." is hardcoded in English instead of `t('processing')` | `src/screens/Airtime.jsx` | The Pay button reads "Processing..." in every language while a payment runs |
| 4 | "Payment successful" is hardcoded in English instead of `t('payment_successful')` | `src/screens/Success.jsx` | The success screen heading is always English |
| 5 | "No transactions yet" is hardcoded in English instead of `t('no_transactions')` | `src/screens/History.jsx` | The empty History screen is always English |
| 6 | The `pay_bill` key is missing from `ha.json` | `src/locales/ha.json` | In Hausa the home tile and bill screen title fall back to English "Pay bill" |

The translations in `pcm.json`, `yo.json`, `ig.json` and `ha.json` were written with AI help and
have **not** been reviewed by native speakers yet. Wording mistakes there are not on this list.
