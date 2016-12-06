var mongoose = require('mongoose');

//Event schema

var eventSchema = mongoose.Schema({
 organizer : {
    type:String,
    required:true,
    unique:true
  },
  attendees : [{
    type:String,
    required:true
  }],
  where:{
    type:String
  },
  description:{
    type:String
  },
  start_date:{
    type:Date
  },
  end_date:{
    type:Date
  },{collection: "calendar.event"}
});


var event = module.exports = mongoose.model('event',eventSchema);