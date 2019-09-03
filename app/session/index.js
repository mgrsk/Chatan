'use strict';
const session = require('express-session');
const mongo = require('connect-mongo')(session);
const config = require('../config');
const database = require('../database');

if(process.env.NODE_ENV === 'production') {
	module.exports = session({
		secret: config.sessionSecret,
		resave: false,
		saveUninitialized: false,
		store: new mongo({
			mongooseConnection: database.mongoose.connection
		})

	});
} else {
	module.exports = session({
		secret: config.sessionSecret,
		resave: false,
		saveUninitialized: true
	});
}