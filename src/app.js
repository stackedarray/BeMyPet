//This is the Script that Starts our Development
//Use Strict to prevent JS Errors
'use strict';


//Require Express Dependancy
var express = require('express');

//Create Instance of Express and Assign it to App
var app = express();

require('./database');

var router = require('./api');

//Serves the Public Directory when Route of Site is Required
app.use('/',express.static('public'));


//Call to API Routes
app.use('/api',router);

//Configure the app to listen for requests on port 3000
app.listen(3000,function() {
	console.log(' ⚙ | Server Listening on http://localhost:3000');
});
