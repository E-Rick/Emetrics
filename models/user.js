const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create userSchema
const userSchema = new Schema({
	oauthId : {
		type    : String,
		default : null
	},
	email   : {
		type     : String,
		required : [true, 'email required']
	},
	name    : {
		type : String
	},
	avatar  : {
		type : String
	},
	created : {
		type    : Date,
		default : Date.now
	},
	credits : {
		type    : Number,
		default : 0
	} // credits to purchase surveys
});

module.exports = mongoose.model('User', userSchema);
