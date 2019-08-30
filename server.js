'use strict';

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

let testMiddleware = (req, res, next) => {
	req.hello = "Test";
	next();
}

app.use('/', testMiddleware);




app.get('/', (req, res, next) => {
	res.send('Success!' + req.hello + ' yes!') ;
});

app.get('/dashboard', (req, res, next) => {
	res.send('<h1>This is the dashboard page!</h1>');
})

app.listen(app.get('port'), () => {
	console.log("Running on port 3000...");
});

