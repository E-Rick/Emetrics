require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/user');
require('./services/passport');

// connect to MongoDB database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const app = express();

app.use(express.json()); // builtin express middleware to parse incoming requests with JSON payload
app.use(express.urlencoded({ extended: false }));
app.use(
	cookieSession({
		maxAge : 30 * 24 * 60 * 1000, // tell cookie to last for 30 days
		keys   : [process.env.COOKIE_KEY] // key to encrypt cookie
	})
);
app.use(passport.initialize());
app.use(passport.session());

// Call the module.exports function returned from routes with app object as param
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets like our main.js file, or main.css file
	app.use(express.static('client/build'));
	// Express will serve up the index.html file if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
