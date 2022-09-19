var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
// al objeto que se le usa para llamar se llama view model
  res.render('index', { 
  title: 'Express' ,
  author: 'Marlene Rodriguez'});
});

module.exports = router;
