'use strict';

angular.module('myPetApp')
	.service('dataService',function($http) {
		this.getData = function(callback) {
			$http.get('../../mocks/data.json').then(callback);
		}
	});



// var success = function(response){
// 	console.log(response);		
// }

// var failure = function(err){
// 	console.log('Error in getting data from this roufne');
// 	console.log(err);		
// }

// $http.get('/')
// 	.then(success);
