'use strict';

angular.module('myPetApp',[]).
	controller('mainCtrl',function($scope, dataService) {

		var callback = function(response) {
			console.log(response.data);
			$scope.pets = response.data
		}

		dataService.getData(callback);

		console.log("hey hey");
	});