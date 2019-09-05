const products = [
	{ title: 'queso', type: 'rancio' },
	{ title: 'carne', type: 'salada' },
	{ title: 'mandioca', type: 'dura' }
];

const handler = (req, res, next) => {
	res.json({ products });
	next();
};

module.exports = handler;
