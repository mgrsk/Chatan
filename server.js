'use strict';

const express = require('express');
const app = express();
const chatan = require('./app');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', chatan.router);


app.listen(app.get('port'), () => {
	console.log("Running on port " + app.get('port') + "...");
});

