const users = [
	{ name: 'calixta', email: 'calix@ta.com' },
	{ name: 'calixta', email: 'calix@ta.com' },
	{ name: 'calixta', email: 'calix@ta.com' }
];

const handler = (req, res, next) => {
	console.log('Pidiendo usuarios');
	res.json({ users });
	next();
};

module.exports = handler;
