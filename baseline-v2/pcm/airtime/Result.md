---
test: ../airtime_test.md
status: failed
started: 2026-11-21T11:18:36.015Z
duration_s: 358
session_id: a998d0f9-7a47-4554-b876-d3fd934b36e4
---

# Buy airtime — Result

## Sign up ✓ passed (96.8s)
md5: 8795bf085197ce8858e4043dbbad643a
Verify the main button reads exactly "Register" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Your full name and "08031234567" as the Your phone number.
Click "Register".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Buy credit" (ignore its icon).

## Open airtime ✓ passed (72.5s)
md5: 465dea7afa1e15fa507b5858c3e6b607
Verify the "Buy credit" button text is fully visible and not cut off.
Click "Buy credit".
Then verify the heading reads exactly "Buy credit" and the main button reads exactly "Pay am".
Verify no button, label or heading text on this screen is cut off or overflowing its box.

## Pay ✗ failed (149.5s)
md5: f82af0156cb18386efcdf3c252fd2c56
Reason: Final verification failed: "the same button now reads exactly "E dey go..."" — bug verdict: Payment-status assertion uses unresolved button-text variable [automation_bug/config_issue, confidence 0.94]
Under "Network" select MTN. Enter "08031234567" as the Your phone number and "500" as the How much (₦).
Verify the "Pay am" button text is fully visible and not cut off.
Click "Pay am".
Then immediately verify the same button now reads exactly "E dey go...".

## Payment result ⏭ skipped
