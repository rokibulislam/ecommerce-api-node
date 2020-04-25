const express = require('express');
const router = express.Router();

router.get('/braintree/getToken/:userId', (req, res) => {});

router.post('/braintree/payment/:userId', (req, res) => {});

module.exports = router;
