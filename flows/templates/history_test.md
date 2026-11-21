---
url: http://localhost:5173
max_steps: 45
---
# History

## Sign up
Verify the main button reads exactly "{{sign_up}}" and its text is fully visible and not cut off.
Enter "Ada Obi" as the {{full_name}} and "08031234567" as the {{phone_number}}.
Click "{{sign_up}}".
Then verify the home screen shows the name "Ada Obi".
Verify the home screen has a button that reads exactly "{{buy_airtime}}" (ignore its icon).

## Buy airtime
Click "{{buy_airtime}}".
Then verify the heading reads exactly "{{buy_airtime}}".
Under "{{network}}" select MTN. Enter "08031234567" as the {{phone_number}} and "500" as the {{amount}}.
Click "{{pay}}".

## Back to home
Wait until the payment finishes (up to 30 seconds).
Then verify the main button reads exactly "{{back_home}}".
Verify the "{{back_home}}" button text is fully visible and not cut off.
Click "{{back_home}}".
Then verify the home screen shows a button that reads exactly "{{history}}" (ignore its icon).

## Check history
Click "{{history}}".
Then verify the heading reads exactly "{{history}}" and an MTN airtime transaction for ₦500 is listed.
Verify no button, label or heading text on this screen is cut off or overflowing its box.
{{language_check}}
