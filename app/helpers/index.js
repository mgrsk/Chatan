'use strict';

const router = require('express').Router();
const database = require('../database');

//Iterates through the routes object while mounting the appropriate routes
let _registerRoutes = (routes, method) => {
	for(let key in routes) {
		//First call of this function will check that this key is not pointing to a function 
		if(typeof routes[key] === 'object' && routes[key] !== null && !(routes[key] instanceof Array)){
			//Recursively call _registerRoutes function. routes[key] refers to the route name and key is the method
			_registerRoutes(routes[key], key);
		} else {
			if(method === 'get') {
				//Here key refers to the route name and routes[key] is the function associated with it
				router.get(key, routes[key]);
			} else if(method === 'post') {
				router.post(key, routes[key]);
			} else {
				//Throws a 404 error	
				router.use(routes[key]);
			}
		}
	}
}

let route = routes => {
	_registerRoutes(routes);
	return router;
}

let findOne = profileID => {
	return database.userModel.findOne({
		'profileId': profileID
	});
}

let createNewUser = profile => {
	return new Promise((resolve, reject) => {
		let newUser = new database.userModel({
			profileId: profile.id,
			fulleName: profile.displayName,
			profilePic: profile.photos[0].value || ''
		});

		newUser.save(error => {
			if(error) {
				reject(error);
			} else {
				resolve(newUser);
			}
		});
	});
}

let findById = id => {
	return new Promise((resolve, reject) => {
		database.userModel.findById(id, (error, user) => {
			if(error) {
				reject(error);
			} else {
				resolve(user);
			}
		});
	});
}

module.exports = {
	route,
	findOne,
	createNewUser,
	findById
}