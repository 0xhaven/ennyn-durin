exports.handler = function(context, event, callback) {
	const fallbackNumber = '';
	const response = new Twilio.twiml.VoiceResponse();
	const pin = '42';
	const open = () => { response.play({digits: '9'}) }
	const accepted = new RegExp('(mell?on)|(friend)', 'i');
	if (event.Digits.includes(pin) || accepted.test(event.SpeechResult)) {
		open();
	} else {
		// Shows up in your function logs
		console.log({dtmf: event.Digits, speech: event.SpeechResult});
		if (fallbackNumber) {
			response.dial(fallbackNumber);
		}
	}
	callback(null, response);
}