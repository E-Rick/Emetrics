const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
	new GoogleStrategy(
		{
			clientID     : process.env.GOOGLE_ID,
			clientSecret : process.env.GOOGLE_KEY,
			callbackURL  : 'http://localhost:5000/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			console.log('accessToken', accessToken);
			console.log('refreshToken:', refreshToken);
			console.log('profile:', profile);
		}
	)
);
