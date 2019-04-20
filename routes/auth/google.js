const router = require('express').Router();
const passport = require('passport');

/** 
 * @route  GET auth/google
 * @desc   Register user with Google OAuth2.0
 * @access public
 */
router.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }));

/** 
 * @route  GET auth/google/callback
 * @desc   Login user with Google OAuth2.0
 * @access private
 */
router.get('/callback', passport.authenticate('google'), (req, res) => {
	res.redirect('/surveys');
});

module.exports = router;
