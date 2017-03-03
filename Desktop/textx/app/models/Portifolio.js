var mongoose = require('mongoose');
// var multer =.
var fs = require('fs');


var portifolioSchema =mongoose.Schema({
  ProfileImage:{
    data:Buffer, contentType:String, required:false
  },
  portfolioName:{
    type:String,
    unique:true,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  Sname:{
    type:String,
    required:true
  },
  NoWork:{
    type: Number,
  //  min:1,
  default:0
  }
  // ProfileUrl:String,
})

var portfolio = mongoose.model("portfolio",portifolioSchema);

module.exports = portfolio;
