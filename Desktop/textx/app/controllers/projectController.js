let Project = require('../models/Project');
let Portfolio = require('../models/Portifolio');

let projectController={
  getAllProjects:function(req, res){
    Portfolio.find(function(err, portfolios){
      if(err)
        res.send(err.message);
      else
        res.render('index',{portfolios})

    })

  },

  createProject:function(req, res){
    let project = new Project(req.body);

    project.save(function(err, project){
      if(err){
        res.send(err.message)
        console.log(err);
      }else{
        console.log(project);
        res.redirect('/Pro');
      }
    })
  },

  portfolioView:function(req,res){
  Portfolio.find({username:req.session.username},function(err, portfolios){
    if(err)
    res.send(err.message);
    else {
      if(portfolios){
        // var username = req.session.username;
        res.render("student/LoggedInstudent",{portfolios});
      }

    }
  })
},
  PortCreate:function(req, res){
    let portfolio=new Portfolio(req.body);

    portfolio.save(function(err, portfolio){
      if(err){
        res.send(err.message)
        console.log(err);
      }else{
        console.log(portfolio);
        res.redirect('/port');
      }
    })
  },
  ProV:function(req, res){
    req.session.Portname =req.body.portfolioName;
    Project.find({username:req.session.username },function(err, projects){
      if(err)
        res.send(err.message);
      else
        res.render('student/Projects',{projects})

    })
  }
}

module.exports = projectController
