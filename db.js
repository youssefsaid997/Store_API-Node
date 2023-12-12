const mongoose = require('mongoose');

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log('successfully conntected to database');
	})
	.catch((error) => {
		console.log(`Couldn't connect to database due to ${error.message}`);
	});

console.log(process.env.MONGO_URI);
