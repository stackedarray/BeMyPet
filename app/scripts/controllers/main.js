'use strict';

angular.module('myPetApp').
	controller('mainCtrl',function($scope, dataService) {

		dataService.getPetsData(function(response) {
			console.log(response.data);
			$scope.pets = response.data;
		});

		$scope.deletePet = function(pet, index) {
			dataService.deletePet(pet);
			$scope.pets.splice(index,1);
		}
	});