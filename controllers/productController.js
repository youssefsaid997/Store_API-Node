/*
@GET ALL Prodcuts
route /products
params none
*/

const productModel = require('../model/productModel');

const getProducts = (req, res) => {
	productModel
		.find()
		.then((products) => {
			res.status(200).json({
				status: 'success',
				count: products.length,
				data: products,
			});
		})
		.catch((error) => {
			res.json({
				status: 'fail',
				error: error,
			});
		});
};
const getQueriedProducts = (req, res) => {
	const { featured, company } = req.query;

	const queryObject = {};

	if (featured) {
		queryObject.featured = featured === 'true' ? true : false;
	}
	if (company) {
		queryObject.company = company;
	}
	productModel
		.find(queryObject)
		.then((products) => {
			res.status(200).json({
				status: 'success',
				count: products.length,
				data: products,
			});
		})
		.catch((error) => {
			res.status(400).json({
				status: 'fail',
				error: error.message,
			});
		});
};

const getOneProduct = async (req, res) => {
	const { id } = req.params;

	try {
		const product = await productModel.findById(id);
		res.status(200).json({
			status: 'success',
			data: product,
		});
	} catch (error) {
		res.status(401).json({
			status: 'fail',
			error: error.message,
		});
	}
};

const createProduct = async (req, res) => {
	const { productName, productPrice, rating, company } = req.body;
	try {
		const newProduct = await productModel.create({
			productName,
			productPrice,
			rating,
			company,
		});
		res.status(201).json({
			status: 'success',
			message: 'new product added',
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			error: error.message,
		});
	}
};

const updateProduct = (req, res) => {
	const { id } = req.params;
	const { productName, productPrice, rating, company } = req.body;

	productModel
		.findByIdAndUpdate(id, { productName, productPrice, rating, company })
		.then(() => {
			res.status(202).json({
				status: 'success',
				message: 'Product has been updated successfully',
			});
		})
		.catch((error) => {
			res.status(400).json({
				status: 'fail',
				error: error.message,
			});
		});
};

const deleteProduct = (req, res) => {
	const { id } = req.params;
	productModel
		.findByIdAndDelete(id)
		.then(() => {
			res.status(202).json({
				status: 'success',
				message: 'product has been deleted',
			});
		})
		.catch((error) => {
			res.status(400).json({
				status: 'fail',
				error: error.message,
			});
		});
};

module.exports = {
	getProducts,
	getOneProduct,
	createProduct,
	updateProduct,
	deleteProduct,
	getQueriedProducts,
};
