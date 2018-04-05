var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// new route for users/cool
router.get('/cool', function(req, res, next) {
  res.send("You're so cool dude!");
});

module.exports = router;
