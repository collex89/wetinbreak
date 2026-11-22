---
test: ../empty_history_test.md
status: failed
started: 2026-11-21T14:58:31.235Z
duration_s: 206
session_id: b9d4bd50-d372-4670-89d2-415211939a2c
---

# Empty history — Result

## Sign up ✓ passed (98s)
md5: 427ac70e531a673c016dbdd214fd39ec
Verify the main button reads exactly "Debanye aha" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Aha gị zuru ezu and "08031234567" as the Nọmba ekwentị.
Click "Debanye aha".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Zụta kaadị oku" (ignore its icon).

## Open history ✗ failed (86.3s)
md5: 787b8be0779bd000345d92b61e7bceca
Reason: Checkpoint assertion failed: "the heading reads exactly "Akụkọ azụmahịa" and the text below it reads exactly "Enweghị azụmahịa ọ bụla ugbu a"" — bug verdict: Igbo transaction-history empty state remains in English [application_issue/ui_data_defect, confidence 0.98]
Verify the "Akụkọ azụmahịa" button text is fully visible and not cut off.
Click "Akụkọ azụmahịa".
Then verify the heading reads exactly "Akụkọ azụmahịa" and the text below it reads exactly "Enweghị azụmahịa ọ bụla ugbu a".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.
