# Baseline ("before") results

Kane CLI run of the generated flows in `flows/<lang>/`, 21 November 2026, against the app with the
planted bugs from [KNOWN_BUGS.md](../KNOWN_BUGS.md) still in place. Each flow was run **once** and
nothing was fixed or rerun. The full Kane output for every run is in `baseline/<lang>/<flow>/`.

English (`flows/en/signup_test.md`) was checked first and **passed**.

| Language | signup | airtime | bill | history |
|----------|--------|---------|------|---------|
| Pidgin (pcm) | FAIL | FAIL | FAIL | FAIL |
| Yoruba (yo)  | PASS | FAIL | FAIL | PASS |
| Igbo (ig)    | PASS | FAIL | FAIL | FAIL |
| Hausa (ha)   | PASS | FAIL | FAIL | FAIL |

**4 of 16 passed, 12 failed.**

## Why each one failed (from its Result.md)

Kane labels each failure as either an **app** issue (`application_issue`) or a **test** issue
(`automation_bug`). That label is shown in brackets.

| Flow | Failed step | Reason Kane gave |
|------|-------------|------------------|
| pcm / signup  | Create account | [test] Verification ran before registration was submitted |
| pcm / airtime | Sign up        | [app] Pidgin locale leaves registration text in English |
| pcm / bill    | Sign up        | [app] Pidgin locale leaves English interface text untranslated |
| pcm / history | Check history  | [app] Transaction history leaves English text in Pidgin view |
| yo / airtime  | Buy airtime    | [test] Payment success asserted before submitting the form |
| yo / bill     | Pay bill       | [app] Electricity payment success screen remains in English in Yoruba mode |
| ig / airtime  | Buy airtime    | [app] Payment success message remains in English in Igbo locale |
| ig / bill     | Pay bill       | [app] Igbo payment confirmation remains in English |
| ig / history  | Sign up        | [test] English-words checkpoint lacks expected comparison value |
| ha / airtime  | Buy airtime    | [test] Payment submission click was not executed |
| ha / bill     | Pay bill       | [app] Hausa payment confirmation renders English success text |
| ha / history  | Sign up        | [app] Hausa dashboard leaves "Pay bill" untranslated |

## Notes for reading this honestly

- **Planted bugs Kane caught:** the hardcoded English "Payment successful" (bug 4) in yo, ig and ha
  bill and ig airtime. The missing Hausa `pay_bill` key (bug 6) in ha/history.
- **Probably the same bug, labeled as a test issue:** yo/airtime and ha/airtime failed waiting
  for the translated "Payment successful" heading, which can never appear (bug 4), but Kane blamed its
  own steps instead.
- **Real test issues:** pcm/signup and ig/history failed because of how the checks ran, not because of
  the app. In ig/history the "List any words still in English" wording made Kane create a check with
  nothing to compare against.
- **Pidgin is noisy:** Nigerian Pidgin is English-based, so words like "Register", "Pay" and "Meter
  number" are correct Pidgin but look like English to the language check. The pcm failures mix that
  with the real planted bugs.
- **Missed bugs (false passes):**
  - yo/history passed even though it waits for the Yoruba success heading, which is hardcoded in English.
  - ha/signup passed even though the Hausa home screen shows English "Pay bill". The same screen failed ha/history.
  - Bug 1 (cut-off "Back to home") was never reported. The flows click it, but the cut-off check runs
    afterwards on the next screen, or the flow had already failed earlier.
  - Bugs 3 and 5 ("Processing..." and "No transactions yet") never show up in these flows. Processing
    only lasts a second, and History always has a transaction by the time it's opened.
- Bug 2 (fixed-height tiles) is dormant with the current translations (see KNOWN_BUGS.md).
