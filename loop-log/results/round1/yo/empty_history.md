---
test: ../empty_history_test.md
status: failed
started: 2026-11-21T14:30:33.269Z
duration_s: 229
session_id: 6c819a11-5e99-4602-876b-b94bae15ac71
---

# Empty history — Result

## Sign up ✓ passed (81.8s)
md5: a1425545a3de9e79793442e18951f082
Verify the main button reads exactly "Forúkọ sílẹ̀" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Orúkọ ní kíkún and "08031234567" as the Nọ́mbà fóònù.
Click "Forúkọ sílẹ̀".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Ra káàdì ìpè" (ignore its icon).

## Open history ✗ failed (129.5s)
md5: 9481d86b2bfc7305fe6be5cac1172c51
Reason: The history heading loaded, but the required Yoruba body text remains the English text “No transactions yet”. — bug verdict: Yoruba transaction-history empty state remains in English [application_issue/ui_data_defect, confidence 0.99]
Verify the "Ìtàn ìdúnàádúrà" button text is fully visible and not cut off.
Click "Ìtàn ìdúnàádúrà".
Then verify the heading reads exactly "Ìtàn ìdúnàádúrà" and the text below it reads exactly "Kò sí ìdúnàádúrà kankan síbẹ̀".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.
