var express=require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app=express();

app.listen(3000);
console.log('Running on port 3000');

app.get('/',function(req,res){
	res.send("Hey");
});