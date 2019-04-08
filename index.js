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

app.use(
	cookieSession({
		maxAge : 30 * 24 * 60 * 1000, // tell cookie to last for 30 days
		keys   : [ process.env.COOKIE_KEY ] // key to encrypt cookie
	})
);
app.use(passport.initialize());
app.use(passport.session());

// Call the module.exports function with app as param
require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
	res.send({ bye: 'buddy' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
