---
test: ../history_test.md
status: failed
started: 2026-11-21T12:04:24.116Z
duration_s: 272
session_id: cd14b1ae-5a93-4b43-8dd4-0e0b154c67fb
---

# History — Result

## Sign up ✓ passed (86.1s)
md5: a1425545a3de9e79793442e18951f082
Verify the main button reads exactly "Forúkọ sílẹ̀" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Orúkọ ní kíkún and "08031234567" as the Nọ́mbà fóònù.
Click "Forúkọ sílẹ̀".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Ra káàdì ìpè" (ignore its icon).

## Buy airtime ✓ passed (89.7s)
md5: 42ecb2f86eb3a3180c6ad1b2e21c943f
Click "Ra káàdì ìpè".
Then verify the heading reads exactly "Ra káàdì ìpè".
Under "Nẹ́tíwọ̀ọ̀kì" select MTN. Enter "08031234567" as the Nọ́mbà fóònù and "500" as the Iye owó (₦).
Click "Sanwó".

## Back to home ✗ failed (62.9s)
md5: f6302df2544cf11ab058ef2495381a89
Reason: Checkpoint assertion failed: "the "Padà sí ojú-ìwé àkọ́kọ́" button text is fully visible and not cut off" — bug verdict: Yoruba return-to-home button label is clipped after payment [application_issue/ui_data_defect, confidence 0.98]; category proposal: visual_layout_defect — consider adding to taxonomy
Wait until the payment finishes (up to 30 seconds).
Then verify the main button reads exactly "Padà sí ojú-ìwé àkọ́kọ́".
Verify the "Padà sí ojú-ìwé àkọ́kọ́" button text is fully visible and not cut off.
Click "Padà sí ojú-ìwé àkọ́kọ́".
Then verify the home screen shows a button that reads exactly "Ìtàn ìdúnàádúrà" (ignore its icon).

## Check history ⏭ skipped
