const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: String,
	dob: Date,
	password: { type: String, required: true },
	location: String,
	gender: String,
	account: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("User", UserSchema);