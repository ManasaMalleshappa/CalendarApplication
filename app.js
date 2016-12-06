var express=require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app=express();


User = require('./models/user');
Event = require('./models/event');

mongoose.connect('mongodb://localhost/calendar');

var db = mongoose.connection;

//db.listCollections('test_correctly_access_collections', function(err, col2) {
//    assert.equal(null, err);

app.get('/',function(req,res){
	res.send('Hello World!')
});


app.get('/api/users',function(req,res){
	User.getUsers(function(err,users){
		if(err){
			throw err;
		}
		res.json(users);
	});
});

app.get('/api/events',function(req,res){
	Event.getEvents(function(err,events){
		if(err){
			throw err;
		}
		res.json(events);
	});
});


app.listen(3000);
console.log('Running on port 3000');