require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const app = express();

// Call the module.exports function with app as param
require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
	res.send({ bye: 'buddy' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
