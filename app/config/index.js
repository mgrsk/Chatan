'use strict';

//If in production mode, we will use the production variables
//Which will be set on Heroku. Otherwise, we fill it from a local
//File on disk.
if(process.env.NODE_ENV === 'production') {
	//Production variables
	module.exports = {
		host: process.env.host || "",
		dbURI: process.env.dbURI,
		sessionSecret: process.env.sessionSecret
	}
} else {
	module.exports = require('./development.json');
}