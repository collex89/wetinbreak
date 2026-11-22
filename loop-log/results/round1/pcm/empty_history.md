---
test: ../empty_history_test.md
status: failed
started: 2026-11-21T14:04:57.506Z
duration_s: 108
session_id: 38e94b90-1811-4edf-95bb-b95495dd71c0
---

# Empty history — Result

## Sign up ✗ failed (84.1s)
md5: 8795bf085197ce8858e4043dbbad643a
Reason: navigate_node: post-nav capture failed: TimeoutError: screenshot: Timeout 60000ms exceeded.
Call log:
  - taking page screenshot
  - waiting for fonts to load...
  - fonts loaded
 — bug verdict: Post-navigation screenshot capture timeout [environment_issue/platform_failure, confidence 0.88]
Verify the main button reads exactly "Register" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Your full name and "08031234567" as the Your phone number.
Click "Register".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Buy credit" (ignore its icon).

## Open history ⏭ skipped
