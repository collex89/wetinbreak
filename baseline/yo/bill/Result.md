---
test: ../bill_test.md
status: failed
started: 2026-11-21T09:53:38.840Z
duration_s: 133
session_id: 1b890595-acc3-4790-96fd-fcf85179aff5
---

# Pay electricity bill — Result

## Sign up ✓ passed (58.7s)
md5: 0dfb9d4e5d94394d66adbaeabddf65c7
Enter "Ada Obi" as the Orúkọ ní kíkún and "08031234567" as the Nọ́mbà fóònù, then click "Forúkọ sílẹ̀".
Verify no button, label or heading text is cut off, overlapping or overflowing its box.
Verify all visible text is in Yoruba. List any words still in English. Allowed: the brand 'WetinBreak Pay', network names (MTN, Airtel, Glo, 9mobile), electricity company names, and numbers. Also allowed: the person's name 'Ada Obi' and the language names in the language picker.

## Pay bill ✗ failed (62.6s)
md5: 431ea75645001f9c9e5b3d6f92c0ace2
Reason: Checkpoint assertion failed: "the "Ìsanwó ti yọrí sí rere" message appears" — bug verdict: Electricity payment success screen remains in English in Yoruba mode [application_issue/ui_data_defect, confidence 0.98]
Click "San owó iná". Choose "Ikeja Electric" as the Ilé-iṣẹ́ iná mànàmáná, enter "12345678901" as the Nọ́mbà mítà and "2000" as the Iye owó (₦), then click "Sanwó".
Verify the "Ìsanwó ti yọrí sí rere" message appears.
Verify no button, label or heading text is cut off, overlapping or overflowing its box.
Verify all visible text is in Yoruba. List any words still in English. Allowed: the brand 'WetinBreak Pay', network names (MTN, Airtel, Glo, 9mobile), electricity company names, and numbers. Also allowed: the person's name 'Ada Obi' and the language names in the language picker.
