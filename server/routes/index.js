import express from 'express';
const  router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
// al objeto que se le usa para llamar se llama view model
  res.render('index', { title: 'Express', author: 'Marlene Rodriguez🤦‍♀️'});
});

export default router;
