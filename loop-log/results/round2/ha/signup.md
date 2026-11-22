---
test: ../signup_test.md
status: failed
started: 2026-11-22T10:27:27.079Z
duration_s: 192
session_id: 0e130fc5-fa68-4941-9739-6d279f5e2ee5
---

# Sign up — Result

## Sign-up form ✓ passed (69.2s)
md5: 577bedbba30005cbdfcd55ed2a3fdc0a
Verify the main button reads exactly "Yi rajista" and its text is fully visible and not cut off.
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.

## Create account ✗ failed (92.5s)
md5: 4236e2831b8e70123282d80dc4fb2db2
Reason: Final verification failed: "there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed." — bug verdict: Hausa home screen leaves Pay bill untranslated [application_issue/ui_data_defect, confidence 0.98]
Enter "Ada Obi" as the Cikakken suna and "08031234567" as the Lambar waya.
Click "Yi rajista".
Then verify the home screen shows the name "Ada Obi" and three buttons that read exactly "Sayi katin waya", "Pay bill" and "Tarihin ma'amaloli" (ignore their icons).
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.
