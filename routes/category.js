const express = require('express');
const router = express.Router();

router.get('/category/:categoryId', (req, res) => {});

router.post('/category/create/:userId', (req, res) => {});

router.put('/category/:categoryId/:userId', (req, res) => {});

router.delete('/category/:categoryId/:userId', (req, res) => {});

router.get('/categories', (req, res) => {});

module.exports = router;
