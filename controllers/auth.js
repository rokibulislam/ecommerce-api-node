const jwt = require('jsonwebtoken'); // to generate signed token
const expressJwt = require('express-jwt');

exports.signup = (req, res) => {};

exports.signin = (req, res) => {};

exports.signout = (req, res) => {};

exports.requireSignin = expressJwt({});

exports.isAuth = (req, res) => {};

exports.isAdmin = (req, res) => {};
