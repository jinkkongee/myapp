var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/owner',function(req,res){
	res.render('owner',{title:'pug'});
});

router.get('/menugrazie_coffe',function(req,res){
	res.render('menugrazie_coffe',{title:'pug'});
});

router.get('/menugrazie_latte',function(req,res){
	res.render('menugrazie_latte',{title:'pug'});
});

router.get('/menugrazie_tea',function(req,res){
	res.render('menugrazie_tea',{title:'pug'});
});

router.get('/menugrazie_smoothie',function(req,res){
	res.render('menugrazie_smoothie',{title:'pug'});
});
module.exports = router;
