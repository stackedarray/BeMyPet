'use strict';

var express 	=	 require('express');
var app 		= 	express();
var path 		= 	require('path');


//Creating Express Router for API Calls
var router = express.Router();

//API Routes
router.get('/err',function(req,res) {
	res.sendFile(path.resolve('err/err404.html'));
});

module.exports = router;