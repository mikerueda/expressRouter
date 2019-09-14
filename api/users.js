const users = [
	{ id: '1', name: 'calixta', email: 'calix@ta.com' },
	{ id: '2', name: 'calixta', email: 'calix@ta.com' },
	{ id: '3', name: 'calixta', email: 'calix@ta.com' }
];

const getUser = (req, res, next) => {
	res.json({ users });
	next();
};

const patchUser = (req, res, next) => {
	let data = req.body;
	let index = '';
	let resUser = users.find((e, i) => {
		index = i;
		return e.id === req.params.id;
	});

	if (resUser) {
		let editedUser = { ...resUser, ...data };
		user.splice(1, index);
		user.push(editedUser);
	} else {
		res.status(404).send('no encontramos al usuario');
	}
};

const postUser = (req, res, next) => {
	let data = req.body;
	if (data.hasOwnProperty('name') && data.hasOwnProperty('email')) {
		data.id = users.length + 1; // para el tp, pongamos una generación de ID mas segura.
		users.push(data);
		res.status('201').json(`recibido con el id ${data.id}`);
	} else {
		res.status('400').json('fijate que pusiste mal los datos, ameo.');
	}
	next();
};

const getUserByid = (req, res, next) => {
	let resUser = users.find((e) => e.id === req.params.id);
	if (resUser) {
		res.json(resUser);
	} else {
		res.status(404).send('no encontramos al usuario');
	}
};

module.exports = { getUser, getUserByid, postUser };
