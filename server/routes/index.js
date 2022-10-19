// let show = (msg="No menssage given")=>{
//   console.log(msg)
// }
// show();

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
//View-Model
res.render('index', {
title: 'Express',
author: 'Rodriguez Rojas Marlene 🐱‍👓'
});
});

module.exports = router;
