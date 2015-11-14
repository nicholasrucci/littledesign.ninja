(function(){
	'use strict';

	var mongoose = require('mongoose');
	var passportLocalMongoose = require('passport-local-mongoose');
	var Schema = mongoose.Schema;

	var User = new mongoose.Schema({
		username: String,
		admin: {type: Boolean, default: false},
		favorites: [{
			id: String,
			title: String,
			author: String,
			duration: String
		}]
	});

	User.plugin(passportLocalMongoose);
	module.exports = mongoose.model('User', User);
})();