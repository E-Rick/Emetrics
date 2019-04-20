const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
	title      : String,
	subject    : String,
	body       : String,
	recipients : [String]
});

module.exports = mongoose.model('Survey', surveySchema);
