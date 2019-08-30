'use strict';

const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res, next) => {
	res.render('login');
});



app.listen(app.get('port'), () => {
	console.log("Running on port 3000...");
});

