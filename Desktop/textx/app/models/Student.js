var mongoose =require('mongoose');
var Schema=mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/portfolio")
autoIncrement.initialize(connection);

var StudentSchema = Schema({
//  _id: {type: String, required: false},
 // seq: { type: Number, default: 0 },
 UserId:{
   type:Schema.Types.ObjectId,StartAt:1
 },
 username:{
   type:String,
   required:true,
   unique:true
 },
 email:{
   type:String,
   required:true,
 },
   password:{
     type:String,
    //  required:true
   },

   name: String

})
StudentSchema.plugin(autoIncrement.plugin,'students');

var student = mongoose.model("student", StudentSchema);
module.exports = student;
