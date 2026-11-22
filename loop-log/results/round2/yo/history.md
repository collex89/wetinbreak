---
test: ../history_test.md
status: failed
started: 2026-11-22T09:56:58.968Z
duration_s: 431
session_id: d8e53d4f-e88a-4e4a-ae7d-c4db9839ddc1
---

# History — Result

## Sign up ✓ passed (81.4s)
md5: a1425545a3de9e79793442e18951f082
Verify the main button reads exactly "Forúkọ sílẹ̀" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Orúkọ ní kíkún and "08031234567" as the Nọ́mbà fóònù.
Click "Forúkọ sílẹ̀".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Ra káàdì ìpè" (ignore its icon).

## Buy airtime ✓ passed (154.3s)
md5: 42ecb2f86eb3a3180c6ad1b2e21c943f
Click "Ra káàdì ìpè".
Then verify the heading reads exactly "Ra káàdì ìpè".
Under "Nẹ́tíwọ̀ọ̀kì" select MTN. Enter "08031234567" as the Nọ́mbà fóònù and "500" as the Iye owó (₦).
Click "Sanwó".

## Back to home ✓ passed (89.6s)
md5: f6302df2544cf11ab058ef2495381a89
Wait until the payment finishes (up to 30 seconds).
Then verify the main button reads exactly "Padà sí ojú-ìwé àkọ́kọ́".
Verify the "Padà sí ojú-ìwé àkọ́kọ́" button text is fully visible and not cut off.
Click "Padà sí ojú-ìwé àkọ́kọ́".
Then verify the home screen shows a button that reads exactly "Ìtàn ìdúnàádúrà" (ignore its icon).

## Check history ✗ failed (71.1s)
md5: 6bc6efbfc3264ef1e7d32f37a18eec0c
Reason: Final verification failed: "there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed." — bug verdict: Yoruba transaction timestamp retains English AM marker [application_issue/ui_data_defect, confidence 0.93]
Click "Ìtàn ìdúnàádúrà".
Then verify the heading reads exactly "Ìtàn ìdúnàádúrà" and an MTN airtime transaction for ₦500 is listed.
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.
