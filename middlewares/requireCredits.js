module.exports = (req, res, next) => {
	if (req.user.credits < 1) {
		// status 403: 'Forbidden' indicates the Server understood the request but
		// is refusing to fulfill it. Status 402: 'Payment Required' isn't in use yet.
		return res.status(403).send({ error: 'Not enough credits!' });
	}
	next();
};
