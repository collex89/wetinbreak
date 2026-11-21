---
test: ../empty_history_test.md
status: failed
started: 2026-11-21T12:09:29.206Z
duration_s: 263
session_id: fba2b96b-ab05-417a-8463-ea969c7fc4f5
---

# Empty history — Result

## Sign up ✓ passed (92.8s)
md5: a1425545a3de9e79793442e18951f082
Verify the main button reads exactly "Forúkọ sílẹ̀" and its text is fully visible and not cut off.
Enter "Ada Obi" as the Orúkọ ní kíkún and "08031234567" as the Nọ́mbà fóònù.
Click "Forúkọ sílẹ̀".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "Ra káàdì ìpè" (ignore its icon).

## Open history ✗ failed (136.2s)
md5: 9481d86b2bfc7305fe6be5cac1172c51
Reason: The history screen still shows English “No transactions yet,” not the required Yoruba text. — bug verdict: Yoruba history empty state remains in English [application_issue/ui_data_defect, confidence 0.99]
Verify the "Ìtàn ìdúnàádúrà" button text is fully visible and not cut off.
Click "Ìtàn ìdúnàádúrà".
Then verify the heading reads exactly "Ìtàn ìdúnàádúrà" and the text below it reads exactly "Kò sí ìdúnàádúrà kankan síbẹ̀".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed.
