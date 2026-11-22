---
test: ../airtime_test.md
status: failed
started: 2026-11-21T14:34:53.965Z
duration_s: 300
session_id: 391c54a9-dcc7-4272-b2cb-b9e5ebd1f987
---

# Buy airtime — Result

## Sign up ✓ passed (86.9s)
md5: 427ac70e531a673c016dbdd214fd39ec
Verify the main button reads exactly "Debanye aha" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Aha gị zuru ezu and "08031234567" as the Nọmba ekwentị.
Click "Debanye aha".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Zụta kaadị oku" (ignore its icon).

## Open airtime ✓ passed (67.6s)
md5: 2bafccb147292790e88f225c8b5b7f47
Verify the "Zụta kaadị oku" button text is fully visible and not cut off.
Click "Zụta kaadị oku".
Then verify the heading reads exactly "Zụta kaadị oku" and the main button reads exactly "Kwụọ ego".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.

## Pay ✗ failed (127s)
md5: 3cc7ee977345223d9ff8dbd161917053
Reason: The page transitioned from English “Processing...” to success; the required “Ọ na-aga...” label never appeared. — bug verdict: Igbo payment processing label remains in English [application_issue/ui_data_defect, confidence 0.96]
Under "Netwọk" select MTN. Enter "08031234567" as the Nọmba ekwentị and "500" as the Ego ole (₦).
Verify the "Kwụọ ego" button text is fully visible and not cut off.
Click "Kwụọ ego".
Then immediately verify the same button now reads exactly "Ọ na-aga...".

## Payment result ⏭ skipped
