var express = require('express');
var router = express.Router();

var winston = require('winston');
var Transaction= require('../models/transaction');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getbystudentid/:Student_Id', function(req, res, next) {
  winston.log('info',"Info: Get all class records")
  console.log("info");
  Transaction.find({Student_Id: req.params.Student_Id},function(err,data){
      if(err)
      res.status(500).send(err);
      else {
        res.status(200).json(data);
      }
  })
});


/*Fee payments*/
router.post('/payments/:Student_Id', function(req,res,next){
  var t= new Transaction(
    req.body

  )


    t.save(function(err,suc){
      if(err)
      res.send(err)
      else
      return res.status(201).send({"Message":"Created", type:"internal"});
  })

})




module.exports = router;
