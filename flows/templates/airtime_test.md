---
url: http://localhost:5173
max_steps: 40
---
# Buy airtime

## Sign up
Verify the main button reads exactly "{{sign_up}}" and its text is fully visible and not cut off.
Enter "Ada Obi" as the {{full_name}} and "08031234567" as the {{phone_number}}.
Click "{{sign_up}}".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "{{buy_airtime}}" (ignore its icon).

## Open airtime
Verify the "{{buy_airtime}}" button text is fully visible and not cut off.
Click "{{buy_airtime}}".
Then verify the heading reads exactly "{{buy_airtime}}" and the main button reads exactly "{{pay}}".
Verify no button, label or heading text on this screen is cut off or overflowing its box.
{{language_check}}

## Pay
Under "{{network}}" select MTN. Enter "08031234567" as the {{phone_number}} and "500" as the {{amount}}.
Verify the "{{pay}}" button text is fully visible and not cut off.
Click "{{pay}}".
Then immediately verify the same button now reads exactly "{{processing}}".

## Payment result
Wait until the payment finishes (up to 30 seconds).
Then verify the heading reads exactly "{{payment_successful}}".
Verify the "{{back_home}}" button text is fully visible and not cut off.
{{language_check}}
