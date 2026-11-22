---
test: ../history_test.md
status: failed
started: 2026-11-22T10:39:03.916Z
duration_s: 456
session_id: 638c6a60-91cf-46bd-82b3-07099ceb6c15
---

# History — Result

## Sign up ✓ passed (80.5s)
md5: d99f4d8fe271d4024f9a75e6f18a5872
Verify the main button reads exactly "Yi rajista" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Cikakken suna and "08031234567" as the Lambar waya.
Click "Yi rajista".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Sayi katin waya" (ignore its icon).

## Buy airtime ✓ passed (162.5s)
md5: 10865293eddca9ccb338a5d521127831
Click "Sayi katin waya".
Then verify the heading reads exactly "Sayi katin waya".
Under "Kamfanin sadarwa" select MTN. Enter "08031234567" as the Lambar waya and "500" as the Adadin kuɗi (₦).
Click "Biya".

## Back to home ✓ passed (73.1s)
md5: e2605db478d0d63debb54e57ea386f7a
Wait until the payment finishes (up to 30 seconds).
Then verify the main button reads exactly "Koma shafin farko".
Verify the "Koma shafin farko" button text is fully visible and not cut off.
Click "Koma shafin farko".
Then verify the home screen shows a button that reads exactly "Tarihin ma'amaloli" (ignore its icon).

## Check history ✗ failed (127.7s)
md5: ed078a3e4be12d269c8b5dc94b314d96
Reason: Final verification failed: "there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed." — bug verdict: Hausa transaction history leaves English AM timestamp marker [application_issue/ui_data_defect, confidence 0.97]
Click "Tarihin ma'amaloli".
Then verify the heading reads exactly "Tarihin ma'amaloli" and an MTN airtime transaction for ₦500 is listed.
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.
