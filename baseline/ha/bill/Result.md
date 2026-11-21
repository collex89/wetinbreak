---
test: ../bill_test.md
status: failed
started: 2026-11-21T10:15:36.184Z
duration_s: 189
session_id: 0907e5cc-8cbd-495c-8635-2b5f8a3eada6
---

# Pay electricity bill — Result

## Sign up ✓ passed (77.1s)
md5: b25f8bd14595d2d7ea51e5e75676290e
Enter "Ada Obi" as the Cikakken suna and "08031234567" as the Lambar waya, then click "Yi rajista".
Verify no button, label or heading text is cut off, overlapping or overflowing its box.
Verify all visible text is in Hausa. List any words still in English. Allowed: the brand 'WetinBreak Pay', network names (MTN, Airtel, Glo, 9mobile), electricity company names, and numbers. Also allowed: the person's name 'Ada Obi' and the language names in the language picker.

## Pay bill ✗ failed (76.7s)
md5: 63ba53f8fb2321c80156a39968a983fc
Reason: Checkpoint assertion failed: "the "An biya cikin nasara" message appears" — bug verdict: Hausa payment confirmation renders English success text [application_issue/ui_data_defect, confidence 0.98]
Click "Pay bill". Choose "Ikeja Electric" as the Kamfanin wutar lantarki, enter "12345678901" as the Lambar mita and "2000" as the Adadin kuɗi (₦), then click "Biya".
Verify the "An biya cikin nasara" message appears.
Verify no button, label or heading text is cut off, overlapping or overflowing its box.
Verify all visible text is in Hausa. List any words still in English. Allowed: the brand 'WetinBreak Pay', network names (MTN, Airtel, Glo, 9mobile), electricity company names, and numbers. Also allowed: the person's name 'Ada Obi' and the language names in the language picker.
