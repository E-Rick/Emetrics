const _ = require('lodash'); // helper module to help with iterations
const router = require('express').Router();
const { Path } = require('path-parser');
const { URL } = require('url'); // default helper module in node.js for parsing urls
const requireLogin = require('../../middlewares/requireLogin');
const requireCredits = require('../../middlewares/requireCredits');
const Survey = require('../../models/survey');
const Mailer = require('../../services/Mailer');
const surveyTemplate = require('../../services/emailTemplates/surveyTemplate');

/**
 * @route  GET /api/surveys 
 * @desc   Return a list of surveys created by the current user
 * @access private 
 */
router.get('/', requireLogin, (req, res) => {});

/**
 * @route  GET /api/surveys/:surveysId/:choice
 * @desc   Redirect to a thank you page for providing feedback
 * @access public 
 */
router.get('/:surveyId/:choice', (req, res) => {
	const surveyId = req.params.surveyId;
	const choice = req.params.choice;
	// res.redirect(`/${surveyId}/${choice}`);
	res.send('thanks for your vote!');
});

/**
 * @route  POST /api/surveys/webhooks 
 * @desc   Record feedback from a user
 * @access public 
 */
router.post('/webhooks', (req, res) => {
	const p = new Path('/api/surveys/:surveyId/:choice');
	// map SendGrid events onto onto events array
	_.chain(req.body) // use lodash chain to chain together lodash methods on req.body
		.map(({ event, email, url }) => {
			if (event === 'click') {
				// verify event from SendGrid is a click event
				const match = p.test(new URL(url).pathname); // either object {surveyId: 'xxx', choice: 'xxx'} or null
				if (match) return { email, surveyId: match.surveyId, choice: match.choice };
			}
		})
		.compact() // remove undefined elements in the array
		.uniqBy('email', 'surveyId') // make sure there are no duplicate records with same email and surveyId
		.each(event => {
			// for every event in events array run this query
			Survey.updateOne(
				{
					_id        : surveyId,
					recipients : {
						$elemMatch : { email: email, responded: false }
					}
				},
				{
					$inc : { [choice]: 1 },
					$set : { 'recipients.$.responded': true }
				}
			);
		})
		.value(); // return the value

	res.send({});
});

/**
 * @route  POST /api/surveys 
 * @desc   Create a new survey, save it, then 
 * @access private 
 */
router.post('/', requireLogin, requireCredits, async (req, res) => {
	const { title, subject, body, recipients } = req.body; // de-structure from req.body
	const survey = new Survey({
		title,
		subject,
		body,
		recipients : recipients.split(',').map(email => ({ email: email.trim() })),
		_user      : req.user.id, // reference to user
		dateSent   : Date.now()
	});

	// Send an email
	const mailer = new Mailer(survey, surveyTemplate(survey));

	try {
		await mailer.send();
		await survey.save();
		req.user.credits -= 1;
		const user = await req.user.save();

		res.send(user);
	} catch (error) {
		res.status(422).send(err);
	}
});

module.exports = router;
