---
test: ../history_test.md
status: failed
started: 2026-11-21T12:29:58.426Z
duration_s: 281
session_id: 37ee6035-8b14-448b-901a-3a6de297a4a4
---

# History — Result

## Sign up ✓ passed (91.5s)
md5: 427ac70e531a673c016dbdd214fd39ec
Verify the main button reads exactly "Debanye aha" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Aha gị zuru ezu and "08031234567" as the Nọmba ekwentị.
Click "Debanye aha".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Zụta kaadị oku" (ignore its icon).

## Buy airtime ✓ passed (94.5s)
md5: 4dff055c2bb6b78abde4bc7f364218da
Click "Zụta kaadị oku".
Then verify the heading reads exactly "Zụta kaadị oku".
Under "Netwọk" select MTN. Enter "08031234567" as the Nọmba ekwentị and "500" as the Ego ole (₦).
Click "Kwụọ ego".

## Back to home ✗ failed (52.8s)
md5: 34e18e0cad36a29c2da9136cea0f35c7
Reason: Checkpoint assertion failed: "the "Laghachi na ibe mbụ" button text is fully visible and not cut off" — bug verdict: Igbo return button label is clipped after payment [application_issue/ui_state_mismatch, confidence 0.98]
Wait until the payment finishes (up to 30 seconds).
Then verify the main button reads exactly "Laghachi na ibe mbụ".
Verify the "Laghachi na ibe mbụ" button text is fully visible and not cut off.
Click "Laghachi na ibe mbụ".
Then verify the home screen shows a button that reads exactly "Akụkọ azụmahịa" (ignore its icon).

## Check history ⏭ skipped
