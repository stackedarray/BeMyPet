'use strict';

var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/bemypetDB',function(err) {
	if(err) {
		console.log('Failed to Connecting to MongoDB!');
	} else {
		console.log('Successfully Connected to MongoDB!');
	}
});