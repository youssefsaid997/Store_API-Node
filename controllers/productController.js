/*
@GET ALL Prodcuts
route /products
params none
*/

const getProducts = (req, res) => {
	console.log(`you will get all products`);
	res.send();
};

const getOneProduct = (req, res) => {
	const { id } = req.params;

	console.log(`you will get product of id of ${id}`);
	res.send();
};

const createProduct = (req, res) => {
	const { productName } = req.body;
	console.log(`you will create product with this body : ${productName}`);
	res.send();
};

const updateProduct = (req, res) => {
	const { id } = req.params;
	const body = req.body;

	console.log(`you will update a product of id of ${id}`);
	res.send();
};

const deleteProduct = (req, res) => {
	const { id } = req.params;

	console.log(`you will delete a product of id of ${id}`);
	res.send();
};

module.exports = {
	getProducts,
	getOneProduct,
	createProduct,
	updateProduct,
	deleteProduct,
};
