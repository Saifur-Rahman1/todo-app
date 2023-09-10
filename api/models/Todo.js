const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
	text: {
		type: String,
		required: true
	},
	complete: {
		type: Boolean,
		default: false
	},
	timestamp: {
		type: Date, // Change the type to Date
		default: Date.now // Provide Date.now as a default function
	}
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
