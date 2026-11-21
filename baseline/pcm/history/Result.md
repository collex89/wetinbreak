---
test: ../history_test.md
status: failed
started: 2026-11-21T09:43:41.472Z
duration_s: 291
session_id: f579ba96-4e51-456e-95ca-80be2cc3f3dc
---

# History — Result

## Sign up ✓ passed (78s)
md5: 127b5e7c66210aa6a6533dfe788b3756
Enter "Ada Obi" as the Your full name and "08031234567" as the Your phone number, then click "Register".
Verify no button, label or heading text is cut off, overlapping or overflowing its box.
Verify all visible text is in Nigerian Pidgin. List any words still in English. Allowed: the brand 'WetinBreak Pay', network names (MTN, Airtel, Glo, 9mobile), electricity company names, and numbers. Also allowed: the person's name 'Ada Obi' and the language names in the language picker.

## Buy airtime ✓ passed (151.2s)
md5: 142eff2c140b91d0e9067a57e463c456
Click "Buy credit". Under "Network" select MTN, enter "08031234567" as the Your phone number and "500" as the How much (₦), then click "Pay am".
Wait for "Payment don enter!", then click "Go back to home".
Verify no button, label or heading text is cut off, overlapping or overflowing its box.
Verify all visible text is in Nigerian Pidgin. List any words still in English. Allowed: the brand 'WetinBreak Pay', network names (MTN, Airtel, Glo, 9mobile), electricity company names, and numbers. Also allowed: the person's name 'Ada Obi' and the language names in the language picker.

## Check history ✗ failed (49.9s)
md5: 4b4fe4ac854ca266048575cf555e2b4a
Reason: Checkpoint assertion failed: "all visible text is in Nigerian Pidgin" — bug verdict: Transaction history leaves English text in Pidgin view [application_issue/ui_data_defect, confidence 0.97]
Click "Wetin you don pay before" and verify an MTN airtime transaction for ₦500 is listed.
Verify no button, label or heading text is cut off, overlapping or overflowing its box.
Verify all visible text is in Nigerian Pidgin. List any words still in English. Allowed: the brand 'WetinBreak Pay', network names (MTN, Airtel, Glo, 9mobile), electricity company names, and numbers. Also allowed: the person's name 'Ada Obi' and the language names in the language picker.
