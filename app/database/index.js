'use strict';
const config = require('../config');
const mongoose = require('mongoose');

mongoose.connect(config.dbURI, { useNewUrlParser: true });
mongoose.connection.on('error', error => {
	console.log("MongoDB Error: ", error);
});

const chatUser = new mongoose.Schema({
	profileId: String,
	fullName: String,
	profilePic: String
});

let userModel = mongoose.model('User', chatUser);

module.exports = {
	mongoose,
	userModel
}

