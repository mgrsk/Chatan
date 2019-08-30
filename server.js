'use strict';

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);


app.get('/', (req, res, next) => {
	//res.send('Success!' + req.hello + ' yes!') ;
	res.sendFile(__dirname + '/views/login.htm');
	
});



app.listen(app.get('port'), () => {
	console.log("Running on port 3000...");
});

