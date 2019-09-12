const express = require('express');
const path = require('path');

const users = require('../api/users');
const products = require('../api/products');
const router = express.Router();

// PAGES ROUTES //
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../pages/home.html'));
});

router.get('/productos', (req, res) => {
	res.sendFile(path.join(__dirname, '../pages/productos.html'));
});

// API ROUTES //

router.get('/api/users', users.getUser);
router.get('/api/users/:id', users.getUserByid);
router.post('/api/users', users.postUser);

router.get('/api/products', products);

// NOT FOUNS HANDLER //
router.use((req, res) => {
	res.status(404).send('pifiaste wache');
});

module.exports = router;
