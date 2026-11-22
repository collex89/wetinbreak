---
test: ../bill_test.md
status: failed
started: 2026-11-22T10:35:56.243Z
duration_s: 172
session_id: dc9c2671-5884-41fb-8a72-329345e33916
---

# Pay electricity bill — Result

## Sign up ✓ passed (89.8s)
md5: d99f4d8fe271d4024f9a75e6f18a5872
Verify the main button reads exactly "Yi rajista" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Cikakken suna and "08031234567" as the Lambar waya.
Click "Yi rajista".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Sayi katin waya" (ignore its icon).

## Open bill ✗ failed (69.9s)
md5: 77aa97f5c6c90aa9fe38e53f58edfaa2
Reason: Final verification failed: "there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed." — bug verdict: Contradictory English-text verification [automation_bug/config_issue, confidence 0.98]
Verify the "Pay bill" button text is fully visible and not cut off.
Click "Pay bill".
Then verify the heading reads exactly "Pay bill" and the main button reads exactly "Biya".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.

## Pay ⏭ skipped

## Payment result ⏭ skipped
