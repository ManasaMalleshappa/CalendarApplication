var mongoose = require('mongoose');

//Event schema

var eventSchema = mongoose.Schema({
 organizer : {
    type: mongoose.Schema.ObjectId, ref: 'user'
  },
  attendees : [{
   type: mongoose.Schema.ObjectId, ref: 'user'
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
  }
});


var event = module.exports = mongoose.model('event',eventSchema);

module.exports.getEvents = function(callback,limit){
  event.find(callback).limit(limit);
}