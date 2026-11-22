---
test: ../bill_test.md
status: passed
started: 2026-11-22T10:54:11.198Z
duration_s: 340
session_id: 41a042c1-6208-4b8d-88f9-32927a5caada
---

# Pay electricity bill — Result

## Sign up ✓ passed (71s)
md5: d99f4d8fe271d4024f9a75e6f18a5872
Verify the main button reads exactly "Yi rajista" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Cikakken suna and "08031234567" as the Lambar waya.
Click "Yi rajista".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Sayi katin waya" (ignore its icon).

## Open bill ✓ passed (85.8s)
md5: 107d40b18c8f3515fc28a65bc2581cb6
Verify the "Biya kuɗin wuta" button text is fully visible and not cut off.
Click "Biya kuɗin wuta".
Then verify the heading reads exactly "Biya kuɗin wuta" and the main button reads exactly "Biya".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.

## Pay ✓ passed (122.2s)
md5: 295114edd8eae6345bf0670461127794
Choose "Ikeja Electric" as the Kamfanin wutar lantarki. Enter "12345678901" as the Lambar mita and "2000" as the Adadin kuɗi (₦).
Verify the "Biya" button text is fully visible and not cut off.
Click "Biya".

## Payment result ✓ passed (49.1s)
md5: bf06dd9fc2c08d5ba3544b42fed082aa
Wait until the payment finishes (up to 30 seconds).
Then verify the heading reads exactly "An biya cikin nasara".
Verify the "Koma shafin farko" button text is fully visible and not cut off.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.
