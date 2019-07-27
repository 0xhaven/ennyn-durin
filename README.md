# Ennyn Durin
### Serverless Doors of Durin with Twilio

![Doors of Durin](assets/doors-of-during.jpg)

## Setup
1. Create a [Twilio Runtime function](https://www.twilio.com/console/runtime/functions/manage) with the contents of `validate.js` (Optionally set a fallback number there)
2. Upload your challenge MP3 to [Twilio Runtime Assets](https://www.twilio.com/console/runtime/assets/public) or use you own hosting. Some are included in `assets/`.
3. Upload `speek-fiend.twiml` to a [TwiML Bin](https://www.twilio.com/console/runtime/twiml-bins) with the right challenge URL and validate URL.
4. [Setup a number for Twilio Programmable Voice](https://www.twilio.com/docs/wireless/tutorials/communications-guides/how-to-make-and-receive-phone-calls#purchase-a-voice-enabled-twilio-phone-number) and under its Configure tab, set the "A call comes in" event to use TwiML, specifically the "Speak Friend" Bin you created.


Speak, friend, and enter.