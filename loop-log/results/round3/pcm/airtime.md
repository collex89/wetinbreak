---
test: ../airtime_test.md
status: passed
started: 2026-11-23T20:35:40.382Z
duration_s: 279
session_id: 79c561a5-e718-4434-8215-6cd8e80b1c39
---

# Buy airtime — Result

## Sign up ✓ passed (90.8s)
md5: 8795bf085197ce8858e4043dbbad643a
Verify the main button reads exactly "Register" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Your full name and "08031234567" as the Your phone number.
Click "Register".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Buy credit" (ignore its icon).

## Open airtime ✓ passed (66.9s)
md5: 465dea7afa1e15fa507b5858c3e6b607
Verify the "Buy credit" button text is fully visible and not cut off.
Click "Buy credit".
Then verify the heading reads exactly "Buy credit" and the main button reads exactly "Pay am".
Verify no button, label or heading text on this screen is cut off or overflowing its box.

## Pay ✓ passed (68.2s)
md5: f82af0156cb18386efcdf3c252fd2c56
Under "Network" select MTN. Enter "08031234567" as the Your phone number and "500" as the How much (₦).
Verify the "Pay am" button text is fully visible and not cut off.
Click "Pay am".
Then immediately verify the same button now reads exactly "E dey go...".

## Payment result ✓ passed (38.2s)
md5: 3cee8a65083291583e3b52ef40f81c9f
Wait until the payment finishes (up to 30 seconds).
Then verify the heading reads exactly "Payment don enter!".
Verify the "Go back to home" button text is fully visible and not cut off.
