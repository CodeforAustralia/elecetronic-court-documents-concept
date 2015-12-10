var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  // show a dummy login screen for now
  res.render('admin');
});

module.exports = router;
