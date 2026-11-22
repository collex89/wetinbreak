---
test: ../airtime_test.md
status: passed
started: 2026-11-22T10:31:01.115Z
duration_s: 257
session_id: 78a7923f-1547-4dfd-a334-b29279673fe3
---

# Buy airtime — Result

## Sign up ✓ passed (75.7s)
md5: d99f4d8fe271d4024f9a75e6f18a5872
Verify the main button reads exactly "Yi rajista" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Cikakken suna and "08031234567" as the Lambar waya.
Click "Yi rajista".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Sayi katin waya" (ignore its icon).

## Open airtime ✓ passed (59.6s)
md5: a7fcfa0bcdd8b80f67ab61e91c2bdcb0
Verify the "Sayi katin waya" button text is fully visible and not cut off.
Click "Sayi katin waya".
Then verify the heading reads exactly "Sayi katin waya" and the main button reads exactly "Biya".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.

## Pay ✓ passed (57.3s)
md5: 0796e53a8824c340cf981e8610607660
Under "Kamfanin sadarwa" select MTN. Enter "08031234567" as the Lambar waya and "500" as the Adadin kuɗi (₦).
Verify the "Biya" button text is fully visible and not cut off.
Click "Biya".
Then immediately verify the same button now reads exactly "Ana aiki...".

## Payment result ✓ passed (40.7s)
md5: bf06dd9fc2c08d5ba3544b42fed082aa
Wait until the payment finishes (up to 30 seconds).
Then verify the heading reads exactly "An biya cikin nasara".
Verify the "Koma shafin farko" button text is fully visible and not cut off.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.
