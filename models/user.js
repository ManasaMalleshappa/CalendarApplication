var mongoose = require('mongoose');

//User schema

var userSchema = mongoose.Schema({
  username : {
  	type:String,
  	required:true,
    unique:true
  },
  mail_id : {
  	type:String,
  	required:true
  }
});

var user = module.exports = mongoose.model('user',userSchema);

module.exports.getUsers = function(callback,limit){
  user.find(callback).limit(limit);
}

