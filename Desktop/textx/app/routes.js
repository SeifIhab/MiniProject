var express = require('express');
var router = express.Router();
var projectController= require('./controllers/projectController');
var studentController = require('./controllers/studentController');
//=======================project controller===============================


router.get('/', projectController.getAllProjects);

router.post('/project',projectController.createProject);

 router.get('/port',projectController.portfolioView);

 router.post('/portCreate', projectController.PortCreate);

 router.get('/Pro',projectController.ProV);
//=======================Students controller==============================

/*router.get("/", function(req, res){
  res.send("Ezayak ya saif");
})*/
router.post("/register", studentController.StudentRegister);

router.get("/register", function(req, res){
  res.render("student/studentRegister");
});

router.get("/login",function(req,res){
  res.render("student/StudentLogin");
});
router.post("/loggingIn",studentController.StudentLogin);
// router.get("/logged")

//========================================================================
module.exports = router;
