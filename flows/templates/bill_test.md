---
url: http://localhost:5173
max_steps: 40
---
# Pay electricity bill

## Sign up
Verify the main button reads exactly "{{sign_up}}" and its text is fully visible and not cut off.
Enter "Ada Obi" as the {{full_name}} and "08031234567" as the {{phone_number}}.
Click "{{sign_up}}".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "{{buy_airtime}}" (ignore its icon).

## Open bill
Verify the "{{pay_bill}}" button text is fully visible and not cut off.
Click "{{pay_bill}}".
Then verify the heading reads exactly "{{pay_bill}}" and the main button reads exactly "{{pay}}".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
{{language_check}}

## Pay
Choose "Ikeja Electric" as the {{electricity_company}}. Enter "12345678901" as the {{meter_number}} and "2000" as the {{amount}}.
Verify the "{{pay}}" button text is fully visible and not cut off.
Click "{{pay}}".

## Payment result
Wait until the payment finishes (up to 30 seconds).
Then verify the heading reads exactly "{{payment_successful}}".
Verify the "{{back_home}}" button text is fully visible and not cut off.
{{language_check}}
