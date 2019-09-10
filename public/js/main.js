const printProducts = (data) => {
	console.log(data);
	const container = document.getElementById('productsList');
	container.innerHTML = '';
	data.forEach((e) => {
		container.innerHTML += productItem(e);
	});
};

const validateForm = () => {
	let isValid = false;
	const nameField = document.getElementById('product-name').value;
	const typeField = document.getElementById('product-type').value;

	if (nameField !== '' && nameField.length > 3 && nameField.length < 8) {
		isValid = true;
	} else {
		isValid = false;
	}

	if (typeField !== '' && typeField.length > 3 && typeField.length < 8) {
		isValid = true;
	} else {
		isValid = false;
	}

	isValid ? createProduct({ name: nameField, type: typeField }) : null;
};

const createProduct = (payload) => console.log(payload);

const productItem = (item) => `
  <li class="itemstyle" id="asldfhjkshdf">
    <p>${item.title}</p>
    <span>${item.type}</span>
  </li>
`;

const initialize = () => {
	fetch('/api/products').then((res) => res.json()).then((res) => printProducts(res.products));
};
