const express = require('express');
const router = express.Router();

router.get('/product/:productId', (req, res) => {
	res.send('Product ID');
});

router.post('/product/create/:userId', (req, res) => {
	res.send('Product Create UserID');
});

router.delete('/product/:productId/:userId', (req, res) => {
	res.send('PRODUCT DELETE USERID');
});

router.put('/product/:productId/:userId', (req, res) => {
	res.send('Product ID USERID');
});

router.get('/products', (req, res) => {
	res.send('Products');
});

router.get('/products/search', (req, res) => {
	res.send('Product Search');
});

router.get('/products/related/:productId', (req, res) => {
	res.send('Product Related Product');
});

router.get('/products/categories', (req, res) => {
	res.send('Product Categories');
});

router.post('/products/by/search', (req, res) => {
	res.send('Product By Search');
});

router.get('/product/photo/:productId', (req, res) => {
	res.send('get Photo By Product Id');
});

module.exports = router;
