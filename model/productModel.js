const mongoose = require('mongoose');

const productModel = new mongoose.Schema({
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
});

module.exports = mongoose.model('product', productModel);
