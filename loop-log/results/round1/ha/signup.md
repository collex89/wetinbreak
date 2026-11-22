---
test: ../signup_test.md
status: failed
started: 2026-11-22T09:10:01.247Z
duration_s: 185
session_id: a479c4fc-143c-4e75-964f-584e9b1ef617
---

# Sign up — Result

## Sign-up form ✓ passed (45.6s)
md5: 577bedbba30005cbdfcd55ed2a3fdc0a
Verify the main button reads exactly "Yi rajista" and its text is fully visible and not cut off.
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.

## Create account ✗ failed (91.9s)
md5: 4236e2831b8e70123282d80dc4fb2db2
Reason: Final verification failed: "there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed." — bug verdict: Conflicting home-screen localization assertions [automation_bug/config_issue, confidence 0.98]
Enter "Ada Obi" as the Cikakken suna and "08031234567" as the Lambar waya.
Click "Yi rajista".
Then verify the home screen shows the name "Ada Obi" and three buttons that read exactly "Sayi katin waya", "Pay bill" and "Tarihin ma'amaloli" (ignore their icons).
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.
