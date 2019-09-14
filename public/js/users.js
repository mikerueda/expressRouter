let usersData;
const initialize = async () => {
	usersData = await getUsers();
	printUsers(usersData.users);
};

const getUsers = () => {
	return fetch('/api/users').then((res) => res.json());
};

const userView = ({ id, name, email }) => `
  <tr>
    <td>${id}</td>
    <td>${name}</td>
    <td>${email}</td>
  </tr>
`;

const printUsers = (data) => {
	const container = document.getElementById('usersTable');
	container.innerHTML = '';
	data.forEach((e) => (container.innerHTML += userView(e)));
};

const createUser = () => {
	event.preventDefault();
	const formName = document.getElementById('name');
	const formEmail = document.getElementById('email');

	const payload = {
		name: formName.value,
		email: formEmail.value
	};

	if (isValid(payload)) {
		fetch('api/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				formName.value = '';
				formEmail.value = '';
				initialize();
			})
			.catch((error) => {
				// acá van otras cositas
			});
	} else {
	}
};

const isValid = (payload) => {
	//acá valido las cositas
	return true;
};

const patchExample = (id, payload) => {
	fetch(`api/users/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	})
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
			formName.value = '';
			formEmail.value = '';
			initialize();
		})
		.catch((error) => {
			// acá van otras cositas
		});
};
