---
test: ../airtime_test.md
status: passed
started: 2026-11-22T09:45:20.034Z
duration_s: 310
session_id: 3bd1dd23-fe77-444a-b392-7dcab1ce02dc
---

# Buy airtime — Result

## Sign up ✓ passed (91s)
md5: a1425545a3de9e79793442e18951f082
Verify the main button reads exactly "Forúkọ sílẹ̀" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Orúkọ ní kíkún and "08031234567" as the Nọ́mbà fóònù.
Click "Forúkọ sílẹ̀".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Ra káàdì ìpè" (ignore its icon).

## Open airtime ✓ passed (64s)
md5: de7d6003b103e73888c7574bc0135878
Verify the "Ra káàdì ìpè" button text is fully visible and not cut off.
Click "Ra káàdì ìpè".
Then verify the heading reads exactly "Ra káàdì ìpè" and the main button reads exactly "Sanwó".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.

## Pay ✓ passed (69.5s)
md5: fbfd7bb4ffc98fac989ff5fe9fbbffb9
Under "Nẹ́tíwọ̀ọ̀kì" select MTN. Enter "08031234567" as the Nọ́mbà fóònù and "500" as the Iye owó (₦).
Verify the "Sanwó" button text is fully visible and not cut off.
Click "Sanwó".
Then immediately verify the same button now reads exactly "Ó ń ṣiṣẹ́...".

## Payment result ✓ passed (54.9s)
md5: d34a22176f32a803a9b0e1e9c347368e
Wait until the payment finishes (up to 30 seconds).
Then verify the heading reads exactly "Ìsanwó ti yọrí sí rere".
Verify the "Padà sí ojú-ìwé àkọ́kọ́" button text is fully visible and not cut off.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.
