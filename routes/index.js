//index.js Wai Tung Wong 301222578 2022-10-14

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About me' });
});

router.get('/Projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/Services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/Contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;