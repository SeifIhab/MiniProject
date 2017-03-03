let student=require('../models/Student');
// var expressSession= require('express-session');
// var cookieParser = require('cookie-parser');
let studentController={
  StudentRegister:function(req,res){
// console.log(req.body);


    let Student= new student(req.body);
    Student.save(function(err, student){
      if(err){
        res.send(err.message)
        console.log(err);
      }else{
        console.log(Student);
        //res.redirect('/student')
        // res.render('../views/loginview');
        res.redirect('/port');
      }
    });
  },
  StudentLogin:function(req,res){
    // req.expressSession.username = req.body.username;
// res.send(req.session({username}));
    student.findOne({username:req.body.username, password:req.body.password},function(err, user){
      if(err){
        console.log(err)
        return res.status(500).send();
      }
      if(!user){
        console.log(err);
        res.send('Wrong');
        return res.status(404).send()
      }else {
        // res.status(200).send();
        // res.send(req.user);
        req.session.username= req.body.username;
        // console.log(req.session.username);
         res.redirect('/port');
        console.log(user);
      }
    });
    // if(check==0){
    //   res.send({error:'Login failed try again'});
    // }
  }
}


module.exports = studentController;
