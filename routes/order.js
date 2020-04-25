const express = require('express');
const router = express.Router();

router.post('/order/create/:userId', (req, res) => {
	res.send('order create userid');
});

router.get('/order/list/:userid', (req, res) => {
	res.send('order list by id');
});

router.get('/order/status-values/:userId', (req, res) => {
	res.send('order status UserId');
});

router.put('/order/:orderId/status/:userId', (req, res) => {});

module.exports = router;
