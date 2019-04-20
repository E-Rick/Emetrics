const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const requireLogin = require('../middlewares/requireLogin');

// Pass in the app object from index.js
module.exports = app => {
	app.post('/api/stripe', requireLogin, async (req, res) => {
		if (!req.user) {
			return res.status(401).send({ error: 'You must log in!' });
		}
		// create a stripe Charge object
		const charge = await stripe.charges.create({
			amount      : 500, // in cents #required
			currency    : 'usd', // ISO currency code #required
			description : '$5 for 5 credits', // description of charge obj
			source      : req.body.id // stripe token obtained with Stripe.js
		});
		req.user.credits += 5; // increase user credits by charge amount
		const user = await req.user.save(); // save the updated user model
		res.send(user); // send user model back in response
	});
};
