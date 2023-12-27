require('dotenv').config();

const mongoose = require('mongoose');
const productModel = require('./model/productModel');

const cleanDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		await productModel.deleteMany();
		console.log('Database is emptied successfully!');
		process.exit(0);
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};

cleanDB();
