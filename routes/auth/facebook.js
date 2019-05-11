const router = require('express').Router();
const passport = require('passport');

/** 
 * @route  GET auth/facebook
 * @desc   Register user with facebook OAuth2.0
 * @access public
 */
router.get('/', passport.authenticate('facebook', { scope: ['email'] }));

/** 
 * @route  GET auth/facebook/callback
 * @desc   Login user with facebook OAuth2.0
 * @access private
 */
router.get('/callback', passport.authenticate('facebook'), (req, res) => {
	res.redirect('/surveys');
});

module.exports = router;
