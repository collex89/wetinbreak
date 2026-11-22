---
test: ../airtime_test.md
status: failed
started: 2026-11-22T09:13:27.646Z
duration_s: 247
session_id: c848e3ca-8ba5-4e52-a4c3-0bb1409282cd
---

# Buy airtime — Result

## Sign up ✓ passed (80.7s)
md5: d99f4d8fe271d4024f9a75e6f18a5872
Verify the main button reads exactly "Yi rajista" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Cikakken suna and "08031234567" as the Lambar waya.
Click "Yi rajista".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Sayi katin waya" (ignore its icon).

## Open airtime ✓ passed (72.3s)
md5: a7fcfa0bcdd8b80f67ab61e91c2bdcb0
Verify the "Sayi katin waya" button text is fully visible and not cut off.
Click "Sayi katin waya".
Then verify the heading reads exactly "Sayi katin waya" and the main button reads exactly "Biya".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.

## Pay ✗ failed (65s)
md5: 0796e53a8824c340cf981e8610607660
Reason: Final verification failed: "The same button now reads exactly "Ana aiki..."." — bug verdict: Hausa payment processing label remains in English [application_issue/ui_data_defect, confidence 0.98]
Under "Kamfanin sadarwa" select MTN. Enter "08031234567" as the Lambar waya and "500" as the Adadin kuɗi (₦).
Verify the "Biya" button text is fully visible and not cut off.
Click "Biya".
Then immediately verify the same button now reads exactly "Ana aiki...".

## Payment result ⏭ skipped
