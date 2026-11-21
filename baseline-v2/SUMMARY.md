# Baseline v2 ("before", tighter flows)

Kane CLI run of the generated flows in `flows/<lang>/`, 21 November 2026, against the app with all
six planted bugs from [KNOWN_BUGS.md](../KNOWN_BUGS.md) still in place. Each flow was run **once**,
nothing was fixed and nothing was rerun. The full Kane output for every run is in
`baseline-v2/<lang>/<flow>/`. The first baseline is in [baseline/](../baseline/SUMMARY.md).

Before this run, all **5 English flows passed**, which shows the tests themselves are fair.

| Language | signup | airtime | bill | history | empty_history |
|----------|--------|---------|------|---------|---------------|
| Pidgin (pcm) | PASS | FAIL | FAIL | FAIL | FAIL |
| Yoruba (yo)  | PASS | FAIL | FAIL | FAIL | FAIL |
| Igbo (ig)    | PASS | FAIL | FAIL | FAIL | FAIL |
| Hausa (ha)   | FAIL | FAIL | FAIL | FAIL | FAIL |

**3 of 20 passed, 17 failed.** 12 failures are planted bugs, and 5 are test or tool problems.

## Why each one failed (from its Result.md)

"Planted bug" refers to the numbers in KNOWN_BUGS.md. Kane's own label (app issue or test issue) is
in brackets. Where Kane's label is wrong, the "Planted bug" column says what really happened.

| Flow | Failed step | Reason from Result.md | Planted bug |
|------|-------------|-----------------------|-------------|
| pcm / airtime | Pay | [test] "the same button now reads exactly 'E dey go...'" failed | **None (timing miss).** Kane read the button after payment finished and saw "Go back to home", so it never saw the Processing state |
| pcm / bill | Payment result | [app] Pidgin payment confirmation heading renders in English | **#4** "Payment successful" hardcoded |
| pcm / history | Back to home | [app] Payment confirmation return button label is clipped | **#1** fixed-width button cuts off "Go back to home" |
| pcm / empty_history | Open history | [app] Payment-history empty-state text remains English in Pidgin | **#5** "No transactions yet" hardcoded |
| yo / airtime | Pay | [app] "The payment completed before the required localized processing label could be verified" | **None (timing miss).** Kane blamed the app, but its log shows it never read "Processing..." on the button |
| yo / bill | Payment result | [app] Heading remains "Payment successful" instead of the Yoruba text | **#4** (Kane also noticed #1 on the same screen) |
| yo / history | Back to home | [app] Yoruba return-to-home button label is clipped after payment | **#1** |
| yo / empty_history | Open history | [app] Yoruba history empty state remains in English | **#5** |
| ig / airtime | Pay | [app] Payment button processing label remains in English | **#3** "Processing..." hardcoded (Kane read "Processing...") |
| ig / bill | Payment result | [app] Igbo payment-confirmation heading remains in English | **#4** |
| ig / history | Back to home | [app] Igbo return button label is clipped after payment | **#1** |
| ig / empty_history | Open history | [app] Igbo transaction empty-state message remains in English | **#5** |
| ha / signup | Sign-up form | [tool] "AP produced no action for 3 consecutive steps" | **None (Kane stall).** The screenshot shows the Hausa page rendered correctly. Kane's agent never acted |
| ha / airtime | Sign up | [tool] "AP produced no action for 3 consecutive steps" | **None (Kane stall)**, same as above |
| ha / bill | Open bill | [test] "Contradictory localization assertions" | **#6** missing `pay_bill`. The language check found English "Pay bill". Kane called it contradictory because the exact-text check, built with the English fallback, expected "Pay bill" |
| ha / history | Sign up | [test] Home-button assertion uses an unresolved label placeholder | **None (test issue).** The same "Sayi katin waya" check passed in ha/bill and ha/empty_history |
| ha / empty_history | Open history | [app] Transaction-history empty state remains in English | **#5** |

## Which planted bugs were caught

| Planted bug | Caught in | Missed or not reached |
|-------------|-----------|-----------------------|
| #1 cut-off "Back to home" | pcm, yo, ig history (and seen in yo bill) | ha history stopped earlier at sign-up |
| #2 fixed-height tiles | Not reachable: dormant with today's translations | n/a |
| #3 "Processing..." | ig airtime | pcm and yo airtime were timing misses. ha airtime stalled |
| #4 "Payment successful" | pcm, yo, ig bill | ha bill stopped earlier at #6 |
| #5 "No transactions yet" | pcm, yo, ig, ha empty_history | none |
| #6 Hausa `pay_bill` | ha bill (language check) | the exact-text check can't catch it (see below) |

**False passes: none.** The 3 passing flows (pcm, yo, ig signup) only visit the sign-up form and home
screen. Neither has a planted bug in those languages.

## What's still weak in the tests

- **Processing timing (#3).** Kane takes 15 seconds or more to read the screen after a click. Even with the
  `?slow=1` hook at 20 seconds, it caught "Processing..." in only 1 of 3 attempts.
- **The English fallback hides #6 from exact checks.** `make-flows.js` fills a missing key with its
  English text, so the Hausa flows expect "Pay bill". Only the general language check catches it. A
  flow could instead flag missing keys outright.
- **Kane flakiness.** 3 Hausa runs failed for Kane-side reasons on screens that work (two agent
  stalls and one unresolved check). Rerunning them may give different results.

## Changes from the instructions (be clear about these)

- **`?slow=1` waits 20 seconds, not 4.** With 4 seconds, English airtime failed because Kane read the
  button after payment had finished. It's still only a test hook (`src/store.js`), not a fix.
- **Home check split in two.** "Shows the name 'Ada Obi' and a button that reads exactly …" failed
  once in English with a Kane config error, so it became two separate checks. English airtime passed
  before this split and wasn't rerun.
- **Language check allow-list.** Besides the brand, network and company names, and numbers, it also
  allows the person's name "Ada Obi" and the language names in the picker. Both are on screen by
  design.

Credits: about 1,500 for this round (5 English checks, 2 English reruns and 20 baseline runs).
