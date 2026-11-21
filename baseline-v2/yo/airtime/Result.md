---
test: ../airtime_test.md
status: failed
started: 2026-11-21T11:47:57.377Z
duration_s: 335
session_id: 5594110e-8464-4db3-86ed-5c06a53fd80e
---

# Buy airtime — Result

## Sign up ✓ passed (87.4s)
md5: a1425545a3de9e79793442e18951f082
Verify the main button reads exactly "Forúkọ sílẹ̀" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Orúkọ ní kíkún and "08031234567" as the Nọ́mbà fóònù.
Click "Forúkọ sílẹ̀".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Ra káàdì ìpè" (ignore its icon).

## Open airtime ✓ passed (76.4s)
md5: de7d6003b103e73888c7574bc0135878
Verify the "Ra káàdì ìpè" button text is fully visible and not cut off.
Click "Ra káàdì ìpè".
Then verify the heading reads exactly "Ra káàdì ìpè" and the main button reads exactly "Sanwó".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.

## Pay ✗ failed (138s)
md5: fbfd7bb4ffc98fac989ff5fe9fbbffb9
Reason: The payment completed before the required localized processing label could be verified; the button is no longer present. — bug verdict: Payment processing button uses English label in Yorùbá flow [application_issue/ui_data_defect, confidence 0.91]
Under "Nẹ́tíwọ̀ọ̀kì" select MTN. Enter "08031234567" as the Nọ́mbà fóònù and "500" as the Iye owó (₦).
Verify the "Sanwó" button text is fully visible and not cut off.
Click "Sanwó".
Then immediately verify the same button now reads exactly "Ó ń ṣiṣẹ́...".

## Payment result ⏭ skipped
