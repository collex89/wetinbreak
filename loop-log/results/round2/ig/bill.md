---
test: ../bill_test.md
status: passed
started: 2026-11-22T10:14:36.310Z
duration_s: 331
session_id: 8532cdbc-b260-48ef-a176-6f701fbe0fb2
---

# Pay electricity bill — Result

## Sign up ✓ passed (89.2s)
md5: 427ac70e531a673c016dbdd214fd39ec
Verify the main button reads exactly "Debanye aha" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Aha gị zuru ezu and "08031234567" as the Nọmba ekwentị.
Click "Debanye aha".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Zụta kaadị oku" (ignore its icon).

## Open bill ✓ passed (75.1s)
md5: 4662f3e97694bb51bf70065ef2b2f7d8
Verify the "Kwụọ ụgwọ" button text is fully visible and not cut off.
Click "Kwụọ ụgwọ".
Then verify the heading reads exactly "Kwụọ ụgwọ" and the main button reads exactly "Kwụọ ego".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.

## Pay ✓ passed (82.4s)
md5: 5f62ef21a81340b792fa381709397db9
Choose "Ikeja Electric" as the Ụlọ ọrụ ọkụ eletrik. Enter "12345678901" as the Nọmba mita and "2000" as the Ego ole (₦).
Verify the "Kwụọ ego" button text is fully visible and not cut off.
Click "Kwụọ ego".

## Payment result ✓ passed (47.1s)
md5: 182a4c066a9cef78cf59e1cde4392630
Wait until the payment finishes (up to 30 seconds).
Then verify the heading reads exactly "Ịkwụ ụgwọ gara nke ọma".
Verify the "Laghachi na ibe mbụ" button text is fully visible and not cut off.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.
