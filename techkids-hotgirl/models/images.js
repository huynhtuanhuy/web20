const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
	link: { type: String, required: true },
	view: { type: Number, default: 0 },
	like: { type: Number, default: 0 },
	description: String,
	title: { type: String, required: true },
	author: { type: mongoose.Types.ObjectId, ref: "User" },
}, {
	timestamps: true, // createdAt, updatedAt
});

module.exports = mongoose.model("Image", ImageSchema);