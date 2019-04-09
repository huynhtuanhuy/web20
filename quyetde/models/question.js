const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const QuestionSchema = new Schema({
	content: { type: String, required: true },
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 }
});

module.exports = model("ask", QuestionSchema);