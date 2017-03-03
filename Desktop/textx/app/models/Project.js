var mongoose= require('mongoose');


var projectSchema =mongoose.Schema({
  title:{
    type:String,
    required:true,
    unique:true
  },
  username:{
    type:String,
    required:true
  },
  portfolioName:{
    type:String,
    required:true
  },
  Screenshot:{
    data:Buffer, contentType:String, required:false
  },
  URL:String,

})

var project =mongoose.model("project", projectSchema);

module.exports = project;
