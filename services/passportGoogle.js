const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('User');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	const user = await User.findById(id);
	done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			clientID     : process.env.GOOGLE_ID,
			clientSecret : process.env.GOOGLE_KEY,
			callbackURL  : '/auth/google/callback',
			proxy        : true
		},
		async (accessToken, refreshToken, profile, done) => {
			// Check if we already have a user with that Google profile ID
			const existingUser = await User.findOne({ googleId: profile.id });
			//  we already have a record with the given profile ID
			if (existingUser) return done(null, existingUser);
			// we don't have a record with this ID, make a new record
			const user = await new User({ googleId: profile.id }).save();
			done(null, user);
		}
	)
);
