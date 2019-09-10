const users = [
	{ name: 'calixta', email: 'calix@ta.com' },
	{ name: 'calixta', email: 'calix@ta.com' },
	{ name: 'calixta', email: 'calix@ta.com' }
];

const handler = (req, res, next) => {
	res.json({ users });
	next();
};

module.exports = handler;
