var express = require('express');
var router = require('./app/routes');
var bodyparser= require('body-parser');
var mongoose = require('mongoose');
var session= require('client-sessions');
// var cookieParser = require('cookie-parser');
var DB_URI = "mongodb://localhost:27017/test2";


var app= express();
app.set('view engine','ejs');
// app.use(cookieParser());
app.use(session({
  cookieName: 'session',
  secret: 'random',
  duration: 30*60*1000,
  activeDuration: 5*60*1000,
}));


//config

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(__dirname+'/public'));

mongoose.connect(DB_URI);

app.use(router);

app.listen(8080, function(){
  console.log("Server is running on port 8080");
});
