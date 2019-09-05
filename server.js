const express = require('express');
const logger = require('morgan');
const router = require('./modules/router');
const server = express();
const port = 4002;

server.use(logger('dev'));
server.use('/statics', express.static('public'));
server.use(router);

server.listen(port, () => {
	console.log(`running on port ${port}`);
});
