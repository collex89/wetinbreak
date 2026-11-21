---
test: ../history_test.md
status: failed
started: 2026-11-21T11:36:29.069Z
duration_s: 265
session_id: a19f2e76-5091-4e51-9c23-736ed52a9179
---

# History — Result

## Sign up ✓ passed (94.4s)
md5: 8795bf085197ce8858e4043dbbad643a
Verify the main button reads exactly "Register" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Your full name and "08031234567" as the Your phone number.
Click "Register".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Buy credit" (ignore its icon).

## Buy airtime ✓ passed (87.9s)
md5: 2a54a240edf1e057a097c72379213f04
Click "Buy credit".
Then verify the heading reads exactly "Buy credit".
Under "Network" select MTN. Enter "08031234567" as the Your phone number and "500" as the How much (₦).
Click "Pay am".

## Back to home ✗ failed (50.9s)
md5: c3c4b9a0a527dc9e6db195a0d95710a1
Reason: Checkpoint assertion failed: "the "Go back to home" button text is fully visible and not cut off" — bug verdict: Payment confirmation return button label is clipped [application_issue/ui_data_defect, confidence 0.97]
Wait until the payment finishes (up to 30 seconds).
Then verify the main button reads exactly "Go back to home".
Verify the "Go back to home" button text is fully visible and not cut off.
Click "Go back to home".
Then verify the home screen shows a button that reads exactly "Wetin you don pay before" (ignore its icon).

## Check history ⏭ skipped
