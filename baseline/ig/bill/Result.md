---
test: ../bill_test.md
status: failed
started: 2026-11-21T10:05:05.922Z
duration_s: 174
session_id: d7415525-c981-4035-b660-f0595177bbbd
---

# Pay electricity bill — Result

## Sign up ✓ passed (61.7s)
md5: 3299bebbc853eb895ea4c21061d2cee3
Enter "Ada Obi" as the Aha gị zuru ezu and "08031234567" as the Nọmba ekwentị, then click "Debanye aha".
Verify no button, label or heading text is cut off, overlapping or overflowing its box.
Verify all visible text is in Igbo. List any words still in English. Allowed: the brand 'WetinBreak Pay', network names (MTN, Airtel, Glo, 9mobile), electricity company names, and numbers. Also allowed: the person's name 'Ada Obi' and the language names in the language picker.

## Pay bill ✗ failed (101s)
md5: 66154234be7f760f4e70a95b9cf483e0
Reason: Checkpoint assertion failed: "the "Ịkwụ ụgwọ gara nke ọma" message appears" — bug verdict: Igbo payment confirmation remains in English [application_issue/ui_data_defect, confidence 0.98]
Click "Kwụọ ụgwọ". Choose "Ikeja Electric" as the Ụlọ ọrụ ọkụ eletrik, enter "12345678901" as the Nọmba mita and "2000" as the Ego ole (₦), then click "Kwụọ ego".
Verify the "Ịkwụ ụgwọ gara nke ọma" message appears.
Verify no button, label or heading text is cut off, overlapping or overflowing its box.
Verify all visible text is in Igbo. List any words still in English. Allowed: the brand 'WetinBreak Pay', network names (MTN, Airtel, Glo, 9mobile), electricity company names, and numbers. Also allowed: the person's name 'Ada Obi' and the language names in the language picker.
