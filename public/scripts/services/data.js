'use strict';

angular.module('myPetApp')
	.service('dataService',function($http) {
		this.getPetsData = function(callback) {
			$http.get('mocks/pets.json').then(callback);
		};

		this.deletePet = function(pet) {
			console.log(pet.name,' is deleted');			
		};

		this.savePet = function(pet) {
			console.log(pet.name,'is saved');
		}
	});
