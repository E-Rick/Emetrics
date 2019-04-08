require('dotenv').config();
const express = require('express');
const passport = require('passport');
const app = express();
const GoogleStrategy = require('passport-google-oauth20').Strategy;

app.get('/', (req, res) => {
	res.send({ bye: 'buddy' });
});

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

app.get('/auth/google', passport.authenticate('google', { scope: [ 'profile', 'email' ] }));

app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
