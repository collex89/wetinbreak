---
test: ../bill_test.md
status: passed
started: 2026-11-22T09:33:30.350Z
duration_s: 303
session_id: f2c9b311-2ae8-48d4-a528-f7a719f2dd30
---

# Pay electricity bill — Result

## Sign up ✓ passed (88.6s)
md5: 8795bf085197ce8858e4043dbbad643a
Verify the main button reads exactly "Register" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Your full name and "08031234567" as the Your phone number.
Click "Register".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Buy credit" (ignore its icon).

## Open bill ✓ passed (53.6s)
md5: 83348536c73106c605e139214a30ced7
Verify the "Pay your bill" button text is fully visible and not cut off.
Click "Pay your bill".
Then verify the heading reads exactly "Pay your bill" and the main button reads exactly "Pay am".
Verify no button, label or heading text on this screen is cut off or overflowing its box.

## Pay ✓ passed (91.1s)
md5: a512cad996dec0bce6cf50e4274ed4ae
Choose "Ikeja Electric" as the Light company. Enter "12345678901" as the Meter number and "2000" as the How much (₦).
Verify the "Pay am" button text is fully visible and not cut off.
Click "Pay am".

## Payment result ✓ passed (37.5s)
md5: 3cee8a65083291583e3b52ef40f81c9f
Wait until the payment finishes (up to 30 seconds).
Then verify the heading reads exactly "Payment don enter!".
Verify the "Go back to home" button text is fully visible and not cut off.
