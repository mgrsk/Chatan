'use strict';
const help = require('../helpers');
const passport = require('passport');

module.exports  = () => {
	let routes = {
		'get': {
			'/': (req, res, next) => {
				res.render('login');
			},
			'/rooms': (req, res, next) => {
				res.render('rooms');
			},
			'/chat': (req, res, next) => {
				res.render('chatroom');
			},
			'/auth/facebook': passport.authenticate('facebook'),
			'/auth/facebook/callback': passport.authenticate('facebook', {
				successRedirect: '/rooms',
				failureRedirect: '/'
			})
		},
		'post': {

		},
		'NotFound': (req, res, next) => {
			res.status(404).sendFile(process.cwd() + '/views/404.htm');
		}
	}
	return help.route(routes);
}

