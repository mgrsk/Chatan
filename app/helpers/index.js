'use strict';
//This helper module creates a router and mounts
//all of the routes when called from the routes module.

const router = require('express').Router();

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

module.exports = {
	route: route
}