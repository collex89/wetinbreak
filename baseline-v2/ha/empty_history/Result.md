---
test: ../empty_history_test.md
status: failed
started: 2026-11-21T12:56:03.463Z
duration_s: 153
session_id: 46d11b6e-40bc-4baf-baea-b4fcc8e0fa1c
---

# Empty history — Result

## Sign up ✓ passed (70.1s)
md5: d99f4d8fe271d4024f9a75e6f18a5872
Verify the main button reads exactly "Yi rajista" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Cikakken suna and "08031234567" as the Lambar waya.
Click "Yi rajista".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Sayi katin waya" (ignore its icon).

## Open history ✗ failed (72.8s)
md5: 51a799afcd79ee34e9557bf90d6c7f25
Reason: Checkpoint assertion failed: "The heading reads exactly "Tarihin ma'amaloli" and the text below it reads exactly "Babu ma'amala tukuna"." — bug verdict: Transaction-history empty state remains in English [application_issue/ui_data_defect, confidence 0.98]
Verify the "Tarihin ma'amaloli" button text is fully visible and not cut off.
Click "Tarihin ma'amaloli".
Then verify the heading reads exactly "Tarihin ma'amaloli" and the text below it reads exactly "Babu ma'amala tukuna".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.
