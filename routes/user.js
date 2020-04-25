const express = require('express');
const router = express.Router();

router.get('/secret', (req, res) => {
	res.send('secret');
});

router.get('/user/:userId', (req, res) => {
	res.send('UserID');
});

router.get('/orders/by/user/:userId', (req, res) => {
	res.send('Order By User Id');
});

module.exports = router;
