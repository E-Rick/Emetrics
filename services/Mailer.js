const sendgrid = require('sendgrid');
const { mail: helper } = sendgrid; // same as const helper = sendgrid.mail

/**
 * Mailer provides additional customization to the Mail class provided from sendgrid library 
 * helper.Mail is an object that takes a lot of config and returns a Mailer
 */
class Mailer extends helper.Mail {
	/**
   * @desc Initializes Mailer object with properties required to work with SendGrid API
   * @param {subject, recipients}
   * @param content               HTML string containing the body
   */
	constructor({ subject, recipients }, content) {
		super(); // call helper.Mail constructor

		this.sgApi = sendgrid(process.env.SENDGRID_KEY);
		this.from_email = new helper.Email('no-reply@emetrics.herokuapp.com');
		this.subject = subject;
		this.body = new helper.Content('text/html', content);
		this.recipients = this.formatAddresses(recipients);

		this.addContent(this.body);
		this.addClickTracking();
		this.addRecipients();
	}

	/**
   * Helper function that takes the array of recipients sub document collection,
   * de-structures the e-mail property off recipients and formats the e-mail 
   * with the SendGrid helper
   * @param  [recipients] Array of recipients
   * @return [{*}]        Returns an array of SendGrid helper.Email objects 
   */
	formatAddresses(recipients) {
		return recipients.map(({ email }) => {
			return new helper.Email(email);
		});
	}

	addClickTracking() {
		const trackingSettings = new helper.TrackingSettings();
		const clickTracking = new helper.ClickTracking(true, true);

		trackingSettings.setClickTracking(clickTracking);
		this.addTrackingSettings(trackingSettings);
	}

	addRecipients() {
		const personalize = new helper.Personalization();
		this.recipients.forEach(recipient => {
			personalize.addTo(recipient);
		});
		this.addPersonalization(personalize);
	}

	async send() {
		const request = this.sgApi.emptyRequest({
			method : 'POST',
			path   : '/v3/mail/send',
			body   : this.toJSON()
		});

		const response = await this.sgApi.API(request);
		return response;
	}
}

module.exports = Mailer;
