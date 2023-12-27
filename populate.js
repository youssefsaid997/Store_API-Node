require('dotenv').config();

const mongoose = require('mongoose');
const productModel = require('./model/productModel');
const jsonProducts = require('./products');

const populateData = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		await productModel.deleteMany();
		await productModel.create(jsonProducts);
		console.log('Populating data is done successfully');
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

populateData()