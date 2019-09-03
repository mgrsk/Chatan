'use strict';
const passport = require('passport');
const config = require('../config');
const FacebookStrategy = require('passport-facebook').Strategy;
const helper = require('../helpers');

module.exports = () => {
	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		helper.findById(id)
			.then(user => done(null, user))
			.catch(error => console.log("Error deserializing: " + error));
	});

	//Find a user in the local db using the profile id
	//If the user is found, return the data using done()
	//Otherwise create a new user
	let authProcessor = (accessToken, refreshToken, profile, done) => {
		helper.findOne(profile.id)
			.then(result => {
				if(result) {
					done(null, result);
				} else {
					helper.createNewUser(profile)
						.then(newUser => done(null, newUser))
						.catch(error => console.log('Error adding user: ' + error));
				}
			});
	}

	passport.use(new FacebookStrategy(config.fb, authProcessor));

}