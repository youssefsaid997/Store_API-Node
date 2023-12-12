const express = require('express');
require('dotenv').config();
require('./db');
const productRouter = require('./routes/productsRoute');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/products', productRouter);

app.listen(port, () => {
	console.log(
		`Server is running on port ${port} and on ${process.env.NODE_ENV}`
	);
});
