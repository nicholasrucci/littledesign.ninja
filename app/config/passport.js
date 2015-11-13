module.exports = function (passport) {
	'use strict';

	var User = require('../models/users');
	var LocalStrategy = require('passport-local').Strategy;

	passport.serializeUser(User.serializeUser());
	passport.deserializeUser(User.deserializeUser());
	passport.use(new  LocalStrategy(User.authenticate()));
};
