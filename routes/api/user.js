const router = require('express').Router();
const passport = require('passport');
const User = require('../../models/user');

/**
 * @route GET /api/user
 * @desc Get the current user data
 * @access private
 */
router.get('/', (req, res) => {
	res.send(req.user);
});

/**
 * @route GET /api/user/logout
 * @desc Logout current user from oauth session
 * @access private
 */
router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

module.exports = router;
