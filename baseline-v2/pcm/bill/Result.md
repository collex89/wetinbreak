---
test: ../bill_test.md
status: failed
started: 2026-11-21T11:25:00.950Z
duration_s: 657
session_id: a7800ae6-7c44-4ba1-9794-150f09de883c
---

# Pay electricity bill — Result

## Sign up ✓ passed (73.6s)
md5: 8795bf085197ce8858e4043dbbad643a
Verify the main button reads exactly "Register" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Your full name and "08031234567" as the Your phone number.
Click "Register".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Buy credit" (ignore its icon).

## Open bill ✓ passed (66.1s)
md5: 83348536c73106c605e139214a30ced7
Verify the "Pay your bill" button text is fully visible and not cut off.
Click "Pay your bill".
Then verify the heading reads exactly "Pay your bill" and the main button reads exactly "Pay am".
Verify no button, label or heading text on this screen is cut off or overflowing its box.

## Pay ✓ passed (83.4s)
md5: a512cad996dec0bce6cf50e4274ed4ae
Choose "Ikeja Electric" as the Light company. Enter "12345678901" as the Meter number and "2000" as the How much (₦).
Verify the "Pay am" button text is fully visible and not cut off.
Click "Pay am".

## Payment result ✗ failed (395.6s)
md5: 3cee8a65083291583e3b52ef40f81c9f
Reason: Checkpoint assertion failed: "the heading reads exactly "Payment don enter!"" — bug verdict: Pidgin payment confirmation heading renders in English [application_issue/ui_data_defect, confidence 0.97]
Wait until the payment finishes (up to 30 seconds).
Then verify the heading reads exactly "Payment don enter!".
Verify the "Go back to home" button text is fully visible and not cut off.
