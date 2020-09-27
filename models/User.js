const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: false,
	},
	city: {
		type: String,
		required: false,
	},
	date: {
		type: Date,
		required: true,
		default: Date.now,
	},
});

module.exports = mongoose.model('User', UserSchema);
