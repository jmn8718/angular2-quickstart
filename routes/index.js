var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/crisis*', function(req, res, next) {
  res.render('crisis', { title: 'Angular2' });
});

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.render('index', { title: 'Angular2' });
});

module.exports = router;
