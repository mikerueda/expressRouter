const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = require('./modules/router');
const server = express();
const port = 4002;

server.use(
	bodyParser.urlencoded({
		extended: true
	})
);
server.use(bodyParser.json());

server.use(logger('dev'));
server.use('/assets', express.static('public'));
server.use(router);
server.use(cors);

server.listen(port, () => {
	console.log(`running on port ${port}`);
});
