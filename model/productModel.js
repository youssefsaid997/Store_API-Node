const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	productName: {
		type: String,
		required: [true, "product's name is required!"],
		minLenght: [3, "productname length can't  be lower than 3"],
		maxLenght: [20, "productname length can't be higher than 3"],
		unique: true,
	},
	productPrice: {
		type: Number,
		required: [true, "product's price is required!"],
	},
	rating: {
		type: Number,
	},
	featured: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: String,
	},
	rating: {
		type: Number,
		default: 3,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	company: {
		type: String,
		// enum: ['ikea',"liddy","caressa","marcos"] this is without a error message so
		enum: {
			values: ['ikea', 'liddy', 'caressa', 'marcos'],
			message: '{VALUE} is not supported',
		},
	},
});

module.exports = mongoose.model('product', productSchema);
