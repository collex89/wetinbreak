---
test: ../airtime_test.md
status: failed
started: 2026-11-21T10:02:37.040Z
duration_s: 136
session_id: 287bf673-c1bb-4325-99c0-1f7a2cb4012b
---

# Buy airtime — Result

## Sign up ✓ passed (46s)
md5: 3299bebbc853eb895ea4c21061d2cee3
Enter "Ada Obi" as the Aha gị zuru ezu and "08031234567" as the Nọmba ekwentị, then click "Debanye aha".
Verify no button, label or heading text is cut off, overlapping or overflowing its box.
Verify all visible text is in Igbo. List any words still in English. Allowed: the brand 'WetinBreak Pay', network names (MTN, Airtel, Glo, 9mobile), electricity company names, and numbers. Also allowed: the person's name 'Ada Obi' and the language names in the language picker.

## Buy airtime ✗ failed (77.7s)
md5: 842e97f00b3ac9140231923e4eaa6768
Reason: Checkpoint assertion failed: "the "Ịkwụ ụgwọ gara nke ọma" message appears" — bug verdict: Payment success message remains in English in Igbo locale [application_issue/ui_data_defect, confidence 0.98]
Click "Zụta kaadị oku". Under "Netwọk" select MTN, enter "08031234567" as the Nọmba ekwentị and "500" as the Ego ole (₦), then click "Kwụọ ego".
Verify the "Ịkwụ ụgwọ gara nke ọma" message appears.
Verify no button, label or heading text is cut off, overlapping or overflowing its box.
Verify all visible text is in Igbo. List any words still in English. Allowed: the brand 'WetinBreak Pay', network names (MTN, Airtel, Glo, 9mobile), electricity company names, and numbers. Also allowed: the person's name 'Ada Obi' and the language names in the language picker.
