var express=require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app=express();

mongoose.connect('mongodb://localhost/calendar');

var db = mongoose.connection;


app.get('/',function(req,res){
	res.send('Hello World!')
});

app.listen(3000);
console.log('Running on port 3000');