---
test: ../history_test.md
status: passed
started: 2026-11-23T20:46:14.038Z
duration_s: 409
session_id: 10c9dfb9-dec3-4149-a2b7-8a388ff0b108
---

# History — Result

## Sign up ✓ passed (88.9s)
md5: 427ac70e531a673c016dbdd214fd39ec
Verify the main button reads exactly "Debanye aha" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Aha gị zuru ezu and "08031234567" as the Nọmba ekwentị.
Click "Debanye aha".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Zụta kaadị oku" (ignore its icon).

## Buy airtime ✓ passed (156.1s)
md5: 4dff055c2bb6b78abde4bc7f364218da
Click "Zụta kaadị oku".
Then verify the heading reads exactly "Zụta kaadị oku".
Under "Netwọk" select MTN. Enter "08031234567" as the Nọmba ekwentị and "500" as the Ego ole (₦).
Click "Kwụọ ego".

## Back to home ✓ passed (95.3s)
md5: 34e18e0cad36a29c2da9136cea0f35c7
Wait until the payment finishes (up to 30 seconds).
Then verify the main button reads exactly "Laghachi na ibe mbụ".
Verify the "Laghachi na ibe mbụ" button text is fully visible and not cut off.
Click "Laghachi na ibe mbụ".
Then verify the home screen shows a button that reads exactly "Akụkọ azụmahịa" (ignore its icon).

## Check history ✓ passed (52.9s)
md5: 973830025620819d709bd4cc3213063c
Click "Akụkọ azụmahịa".
Then verify the heading reads exactly "Akụkọ azụmahịa" and an MTN airtime transaction for ₦500 is listed.
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.
