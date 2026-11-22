# Test issues for human review

Failures Kane did not blame on the app (automation_bug), or that ended with no verdict at all
(tool_issue). The loop never changes tests to make them pass: review each one yourself.

## Round 1 (2026-11-22T09:30:13.178Z)

| Flow | Failed step | Label | Kane's reason |
|---|---|---|---|
| pcm / airtime | ? | tool_issue | Kane produced no Result.md |
| pcm / bill | ? | tool_issue | Kane produced no Result.md |
| pcm / history | ? | tool_issue | Kane produced no Result.md |
| pcm / empty_history | Sign up | tool_issue | navigate_node: post-nav capture failed: TimeoutError: screenshot: Timeout 60000ms exceeded. |
| yo / history | Sign up | tool_issue | Screenshot failed: TimeoutError: screenshot: Timeout 60000ms exceeded. |
| ha / signup | Create account | automation_bug | Final verification failed: "there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed." — bug verdict: Conflicting home-screen localization assertions [automation_bug/config_issue, confidence 0.98] |
| ha / bill | Open bill | automation_bug | Final verification failed: "there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed." — bug verdict: Contradictory English-text assertion on Pay bill screen [automation_bug/config_issue, confidence 0.98] |
| ha / empty_history | Sign up | automation_bug | Final verification failed: "the home screen has a button that reads exactly "Sayi katin waya"" — bug verdict: Home-screen action button assertion missed visible control [automation_bug/locator_rot, confidence 0.96] |

## Round 2 (2026-11-22T10:46:58.450Z)

| Flow | Failed step | Label | Kane's reason |
|---|---|---|---|
| pcm / airtime | Sign up | automation_bug | Final verification failed: "the home screen has a button that reads exactly "Buy credit"" — bug verdict: Buy credit label assertion resolves to placeholder [automation_bug/locator_rot, confidence 0.98] |
| pcm / history | Sign up | automation_bug | Final verification failed: "The home screen has a button that reads exactly "Buy credit"." — bug verdict: Buy credit check uses an unresolved placeholder [automation_bug/config_issue, confidence 0.98] |
| ha / bill | Open bill | automation_bug | Final verification failed: "there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. The person's name 'Ada Obi' and the language names in the language picker are also allowed." — bug verdict: Contradictory English-text verification [automation_bug/config_issue, confidence 0.98] |
| ha / empty_history | ? | tool_issue | Kane produced no Result.md |
