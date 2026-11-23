---
test: ../history_test.md
status: passed
started: 2026-11-23T20:40:50.150Z
duration_s: 290
session_id: c57194fb-759d-47e0-84ff-0f51b8976f9d
---

# History — Result

## Sign up ✓ passed (74.4s)
md5: 8795bf085197ce8858e4043dbbad643a
Verify the main button reads exactly "Register" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Your full name and "08031234567" as the Your phone number.
Click "Register".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Buy credit" (ignore its icon).

## Buy airtime ✓ passed (78.6s)
md5: 2a54a240edf1e057a097c72379213f04
Click "Buy credit".
Then verify the heading reads exactly "Buy credit".
Under "Network" select MTN. Enter "08031234567" as the Your phone number and "500" as the How much (₦).
Click "Pay am".

## Back to home ✓ passed (66.8s)
md5: c3c4b9a0a527dc9e6db195a0d95710a1
Wait until the payment finishes (up to 30 seconds).
Then verify the main button reads exactly "Go back to home".
Verify the "Go back to home" button text is fully visible and not cut off.
Click "Go back to home".
Then verify the home screen shows a button that reads exactly "Wetin you don pay before" (ignore its icon).

## Check history ✓ passed (55.6s)
md5: 68ffee000d4f2d48693cda42aecdbb1e
Click "Wetin you don pay before".
Then verify the heading reads exactly "Wetin you don pay before" and an MTN airtime transaction for ₦500 is listed.
Verify no button, label or heading text on this screen is cut off or overflowing its box.
