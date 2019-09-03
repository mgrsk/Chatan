'use strict';
const router = require('./routes')();
const session = require('./session');
const auth = require('./auth')();

module.exports = {
	router,
	auth,
	session
}