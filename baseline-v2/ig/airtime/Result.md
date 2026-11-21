---
test: ../airtime_test.md
status: failed
started: 2026-11-21T12:17:21.705Z
duration_s: 272
session_id: 99a9fa4a-11da-4f73-82fe-4c27ec722aa8
---

# Buy airtime — Result

## Sign up ✓ passed (78.7s)
md5: 427ac70e531a673c016dbdd214fd39ec
Verify the main button reads exactly "Debanye aha" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Aha gị zuru ezu and "08031234567" as the Nọmba ekwentị.
Click "Debanye aha".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Zụta kaadị oku" (ignore its icon).

## Open airtime ✓ passed (83.9s)
md5: 2bafccb147292790e88f225c8b5b7f47
Verify the "Zụta kaadị oku" button text is fully visible and not cut off.
Click "Zụta kaadị oku".
Then verify the heading reads exactly "Zụta kaadị oku" and the main button reads exactly "Kwụọ ego".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.

## Pay ✗ failed (75s)
md5: 3cc7ee977345223d9ff8dbd161917053
Reason: Final verification failed: "the same button now reads exactly "Ọ na-aga..."" — bug verdict: Payment button processing label remains in English [application_issue/ui_data_defect, confidence 0.98]
Under "Netwọk" select MTN. Enter "08031234567" as the Nọmba ekwentị and "500" as the Ego ole (₦).
Verify the "Kwụọ ego" button text is fully visible and not cut off.
Click "Kwụọ ego".
Then immediately verify the same button now reads exactly "Ọ na-aga...".

## Payment result ⏭ skipped
