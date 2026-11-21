---
test: ../bill_test.md
status: failed
started: 2026-11-21T12:22:17.654Z
duration_s: 435
session_id: a6f92ad6-7fa0-46bb-b0e6-b5c5f40f8613
---

# Pay electricity bill — Result

## Sign up ✓ passed (81.3s)
md5: 427ac70e531a673c016dbdd214fd39ec
Verify the main button reads exactly "Debanye aha" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Aha gị zuru ezu and "08031234567" as the Nọmba ekwentị.
Click "Debanye aha".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Zụta kaadị oku" (ignore its icon).

## Open bill ✓ passed (75.2s)
md5: 4662f3e97694bb51bf70065ef2b2f7d8
Verify the "Kwụọ ụgwọ" button text is fully visible and not cut off.
Click "Kwụọ ụgwọ".
Then verify the heading reads exactly "Kwụọ ụgwọ" and the main button reads exactly "Kwụọ ego".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.

## Pay ✓ passed (85.1s)
md5: 5f62ef21a81340b792fa381709397db9
Choose "Ikeja Electric" as the Ụlọ ọrụ ọkụ eletrik. Enter "12345678901" as the Nọmba mita and "2000" as the Ego ole (₦).
Verify the "Kwụọ ego" button text is fully visible and not cut off.
Click "Kwụọ ego".

## Payment result ✗ failed (157.9s)
md5: 182a4c066a9cef78cf59e1cde4392630
Reason: After waiting, the heading remains “Payment successful” rather than the required Igbo text. — bug verdict: Igbo payment-confirmation heading remains in English [application_issue/ui_data_defect, confidence 0.99]
Wait until the payment finishes (up to 30 seconds).
Then verify the heading reads exactly "Ịkwụ ụgwọ gara nke ọma".
Verify the "Laghachi na ibe mbụ" button text is fully visible and not cut off.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.
