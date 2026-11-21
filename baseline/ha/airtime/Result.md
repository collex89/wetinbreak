---
test: ../airtime_test.md
status: failed
started: 2026-11-21T10:12:18.840Z
duration_s: 175
session_id: 88d9c5a4-dc1d-4b04-8f6e-c9f63a632b23
---

# Buy airtime — Result

## Sign up ✓ passed (65.5s)
md5: b25f8bd14595d2d7ea51e5e75676290e
Enter "Ada Obi" as the Cikakken suna and "08031234567" as the Lambar waya, then click "Yi rajista".
Verify no button, label or heading text is cut off, overlapping or overflowing its box.
Verify all visible text is in Hausa. List any words still in English. Allowed: the brand 'WetinBreak Pay', network names (MTN, Airtel, Glo, 9mobile), electricity company names, and numbers. Also allowed: the person's name 'Ada Obi' and the language names in the language picker.

## Buy airtime ✗ failed (75.4s)
md5: 22c8740a64ab3c127dc24035cb0e3112
Reason: Checkpoint assertion failed: "the "An biya cikin nasara" message appears" — bug verdict: Payment submission click was not executed [automation_bug/agent_misstep, confidence 0.98]
Click "Sayi katin waya". Under "Kamfanin sadarwa" select MTN, enter "08031234567" as the Lambar waya and "500" as the Adadin kuɗi (₦), then click "Biya".
Verify the "An biya cikin nasara" message appears.
Verify no button, label or heading text is cut off, overlapping or overflowing its box.
Verify all visible text is in Hausa. List any words still in English. Allowed: the brand 'WetinBreak Pay', network names (MTN, Airtel, Glo, 9mobile), electricity company names, and numbers. Also allowed: the person's name 'Ada Obi' and the language names in the language picker.
