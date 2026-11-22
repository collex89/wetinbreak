# Android runs: blocked by the account plan (2026-11-22)

The setup is done and both APKs build, but no Android test has run yet. Both mobile routes were refused
before a device or job started, so there are no Kane results here and no credits were spent on them.

| Route | Command | What Kane said |
|---|---|---|
| Real device | `kane-cli testmd run flows-android/ha/bill_test.md --agent --app ./builds/wetinbreak-before.apk` | "Real devices aren't included in your TestMu AI plan. Running on a real device needs the KaneAI Max or Real Device Plus Automation Cloud plan." |
| Cloud emulator | `kane-cli testrun run flows-emulator/before/ha/bill_test.md --remote --device-name "Pixel 7" --os-version 14` | The dry run passed (Pixel 7, Android 14). The real run failed: HyperExecute "Unable to create a job. Your plan has expired." |

Each route was tried once and not retried.

## Ready to run once a plan is active

- `builds/wetinbreak-after.apk`: the current code (after loop round 1 and the Hausa `pay_bill` fix), built with `VITE_SLOW=1`.
- `builds/wetinbreak-before.apk`: commit `92dd070`, the planted-bug code just before loop round 1, with only the
  Capacitor setup and the `VITE_SLOW` hook added. Same UI as "after", so the two differ only by the fixes.
- Real device: `npm run flows:android` writes `flows-android/<lang>/<flow>_test.md` (`target: android`).
- Cloud emulator: `npm run flows:emulator` writes `flows-emulator/{after,before}/<lang>/<flow>_test.md` (`target: emulator`).
  Each file names its own APK because `testrun` has no `--app` option.
- `app:` resolves relative to the test file, so the flows use `../../builds/…` (Android) and `../../../builds/…` (emulator).
- `builds/` is gitignored. Rebuild with `VITE_SLOW=1 npm run build && npx cap sync android && cd android && ./gradlew assembleDebug`
  using JDK 21 (`JAVA_HOME=~/.jdks/jbr-21.0.11`), because Gradle 8.14 does not run on the default Java 25.

Planned runs (each once): BEFORE ha/bill and yo/airtime; AFTER airtime and bill for pcm, yo, ig and ha.
