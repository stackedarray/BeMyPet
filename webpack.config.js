var webpack		= 	require('webpack'),
	path 		=	require('path');


//Context Tells Webpack where, the Application Source Code Lives
module.exports = {
	context	: __dirname + '/app',
	entry   : {
		app : './scripts/app.js',
		vendor : ['angular']
	},
	output : {
		path : __dirname + '/public/scripts',
		filename : 'pet.bundle.js'
	}
};

