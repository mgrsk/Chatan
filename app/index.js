'use strict';
const router = require('./routes');
const session = require('./session');

module.exports = {
	//Router is a function and must be invoked
	router: router(),
	session: session
}