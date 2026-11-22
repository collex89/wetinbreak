---
test: ../history_test.md
status: failed
started: 2026-11-22T09:21:54.714Z
duration_s: 328
session_id: 293204ff-95b9-4f5c-999f-38d6eb4bd015
---

# History — Result

## Sign up ✓ passed (88.4s)
md5: d99f4d8fe271d4024f9a75e6f18a5872
Verify the main button reads exactly "Yi rajista" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Cikakken suna and "08031234567" as the Lambar waya.
Click "Yi rajista".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Sayi katin waya" (ignore its icon).

## Buy airtime ✓ passed (146.9s)
md5: 10865293eddca9ccb338a5d521127831
Click "Sayi katin waya".
Then verify the heading reads exactly "Sayi katin waya".
Under "Kamfanin sadarwa" select MTN. Enter "08031234567" as the Lambar waya and "500" as the Adadin kuɗi (₦).
Click "Biya".

## Back to home ✗ failed (51.6s)
md5: e2605db478d0d63debb54e57ea386f7a
Reason: Checkpoint assertion failed: "the "Koma shafin farko" button text is fully visible and not cut off." — bug verdict: Hausa return-button label is clipped on payment success [application_issue/ui_data_defect, confidence 0.98]; category proposal: ui_layout_defect — consider adding to taxonomy
Wait until the payment finishes (up to 30 seconds).
Then verify the main button reads exactly "Koma shafin farko".
Verify the "Koma shafin farko" button text is fully visible and not cut off.
Click "Koma shafin farko".
Then verify the home screen shows a button that reads exactly "Tarihin ma'amaloli" (ignore its icon).

## Check history ⏭ skipped
