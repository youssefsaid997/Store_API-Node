const router = require('express').Router();
const {
	createProduct,
	deleteProduct,
	updateProduct,
	getProducts,
	getOneProduct,
	getQueriedProducts,
} = require('../controllers/productController');

router.route('/').get(getProducts).post(createProduct);

router.route('/search').get(getQueriedProducts);

router
	.route('/:id')
	.get(getOneProduct)
	.patch(updateProduct)
	.delete(deleteProduct);

module.exports = router;
