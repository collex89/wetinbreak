---
test: ../airtime_test.md
status: failed
started: 2026-11-21T09:51:04.858Z
duration_s: 138
session_id: fa3429e5-7253-47db-a58e-3c834466c124
---

# Buy airtime — Result

## Sign up ✓ passed (61.4s)
md5: 0dfb9d4e5d94394d66adbaeabddf65c7
Enter "Ada Obi" as the Orúkọ ní kíkún and "08031234567" as the Nọ́mbà fóònù, then click "Forúkọ sílẹ̀".
Verify no button, label or heading text is cut off, overlapping or overflowing its box.
Verify all visible text is in Yoruba. List any words still in English. Allowed: the brand 'WetinBreak Pay', network names (MTN, Airtel, Glo, 9mobile), electricity company names, and numbers. Also allowed: the person's name 'Ada Obi' and the language names in the language picker.

## Buy airtime ✗ failed (63.3s)
md5: 954492ad459660c08d03eb0d6df56567
Reason: Checkpoint assertion failed: "the "Ìsanwó ti yọrí sí rere" message appears" — bug verdict: Payment success asserted before submitting the form [automation_bug/agent_misstep, confidence 0.98]
Click "Ra káàdì ìpè". Under "Nẹ́tíwọ̀ọ̀kì" select MTN, enter "08031234567" as the Nọ́mbà fóònù and "500" as the Iye owó (₦), then click "Sanwó".
Verify the "Ìsanwó ti yọrí sí rere" message appears.
Verify no button, label or heading text is cut off, overlapping or overflowing its box.
Verify all visible text is in Yoruba. List any words still in English. Allowed: the brand 'WetinBreak Pay', network names (MTN, Airtel, Glo, 9mobile), electricity company names, and numbers. Also allowed: the person's name 'Ada Obi' and the language names in the language picker.
