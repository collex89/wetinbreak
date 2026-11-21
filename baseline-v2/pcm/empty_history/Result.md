---
test: ../empty_history_test.md
status: failed
started: 2026-11-21T11:41:17.539Z
duration_s: 175
session_id: ed45d809-c277-4c7f-adab-2e2d23f4e826
---

# Empty history — Result

## Sign up ✓ passed (84.4s)
md5: 8795bf085197ce8858e4043dbbad643a
Verify the main button reads exactly "Register" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Your full name and "08031234567" as the Your phone number.
Click "Register".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Buy credit" (ignore its icon).

## Open history ✗ failed (59.4s)
md5: cfa5c8e288a42c8cb8e0eb4db25e033b
Reason: Checkpoint assertion failed: "the text below it reads exactly "You never pay anything yet"" — bug verdict: Payment-history empty-state text remains English in Pidgin [application_issue/ui_data_defect, confidence 0.99]
Verify the "Wetin you don pay before" button text is fully visible and not cut off.
Click "Wetin you don pay before".
Then verify the heading reads exactly "Wetin you don pay before" and the text below it reads exactly "You never pay anything yet".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
