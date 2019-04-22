const router = require('express').Router();
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
 * @access private 
 */
router.post('/webhooks', requireLogin, (req, res) => {});

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
