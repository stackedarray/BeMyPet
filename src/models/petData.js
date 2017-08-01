'use strict';

var mongoose = require('mongoose');

var petSchema = new mongoose.Schema({
	name : String,
	img  : String	
});

var model = mongoose.model('BeMyPet',petSchema);

module.exports = model;