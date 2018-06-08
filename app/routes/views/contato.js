//Esse script é apenas um teste. Depois será usado o _contact.js

var keystone = require('keystone');
var express = require('express')
var router = express.Router();

router.get('/', function (req, res) {
	var view = new keystone.View(req, res);
	res.locals.section = 'Contato';
	view.render('contato');
});

module.exports = router
