var express = require('express');
var router = express.Router();
let connection = require('../models/mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('get /');
  connection.sequelize.query('select * from user;').then(info => {
    res.render('index', { title: 'Express' , info});
  });
});

module.exports = router;
