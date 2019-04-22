const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./recipient');

const surveySchema = new Schema({
	title         : String,
	subject       : String,
	body          : String,
	recipients    : [RecipientSchema],
	yes           : { type: Number, default: 0 },
	no            : { type: Number, default: 0 },
	// _ prefix to indicate a reference field (relationship between this model and User)
	_user         : { type: Schema.Types.ObjectId, ref: 'User' },
	dateSent      : Date,
	lastResponded : Date
});

module.exports = mongoose.model('Surveys', surveySchema);
