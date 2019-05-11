const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('User');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new FacebookStrategy(
		{
			clientID      : process.env.FACEBOOK_ID,
			clientSecret  : process.env.FACEBOOK_KEY,
			callbackURL   : '/auth/facebook/callback',
			profileFields : ['id', 'email', 'displayName', 'link', 'gender', 'photos'],
			proxy         : true
		},
		async (accessToken, refreshToken, profile, done) => {
			const email = profile.emails[0].value;
			const existingUser = await User.findOne({ email: email });
			const user = await new User({
				oauthId : profile.id,
				email   : email,
				name    : profile.displayName,
				avatar  : profile.photos[0].value
			});
			existingUser ? done(null, existingUser) : user.save() && done(null, user);
		}
	)
);
