---
test: ../bill_test.md
status: failed
started: 2026-11-21T11:53:57.741Z
duration_s: 596
session_id: 3523ac7f-03f0-404a-8a7d-c72ea5d92a41
---

# Pay electricity bill — Result

## Sign up ✓ passed (90.5s)
md5: a1425545a3de9e79793442e18951f082
Verify the main button reads exactly "Forúkọ sílẹ̀" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Orúkọ ní kíkún and "08031234567" as the Nọ́mbà fóònù.
Click "Forúkọ sílẹ̀".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Ra káàdì ìpè" (ignore its icon).

## Open bill ✓ passed (75.8s)
md5: cbd071150c3321554c1bd53a2305e0d8
Verify the "San owó iná" button text is fully visible and not cut off.
Click "San owó iná".
Then verify the heading reads exactly "San owó iná" and the main button reads exactly "Sanwó".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.

## Pay ✓ passed (149.4s)
md5: 9f8f9fbbb0f18cbe9510edda0d915a13
Choose "Ikeja Electric" as the Ilé-iṣẹ́ iná mànàmáná. Enter "12345678901" as the Nọ́mbà mítà and "2000" as the Iye owó (₦).
Verify the "Sanwó" button text is fully visible and not cut off.
Click "Sanwó".

## Payment result ✗ failed (244.5s)
md5: d34a22176f32a803a9b0e1e9c347368e
Reason: After 30 seconds, the heading remains “Payment successful” instead of the required Yoruba text. — bug verdict: Yoruba payment confirmation retains English heading and clips return label [application_issue/ui_data_defect, confidence 0.99]
Wait until the payment finishes (up to 30 seconds).
Then verify the heading reads exactly "Ìsanwó ti yọrí sí rere".
Verify the "Padà sí ojú-ìwé àkọ́kọ́" button text is fully visible and not cut off.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.
