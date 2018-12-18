'use strict'

var path = require('path');

module.exports = function(app){

	app.get('/*', function(req,res){
		res.sendFile(path.resolve(__dirname, '../App/dist/index.html'))
	})

	app.get('/about',function(req,res){
		res.redirect('/')
	})

  app.get('/projects',function(req,res){
		res.redirect('/')
	})

  app.get('/resume',function(req,res){
		res.redirect('/')
	})


}
