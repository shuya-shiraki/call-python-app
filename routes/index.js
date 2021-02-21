var express = require('express');
var router = express.Router();

var parametors = require('../parametors.json')

var csv = require('../models/csvManager')
var python = require('../models/callPython')

/* GET home page. */
router.get('/', function (req, res, next) {

  var keys = Object.keys(parametors);
  res.render('index', { title: '入力画面', parametors: parametors, keys: keys });
});

router.post('/result', function (req, res, next) {
  csv.makeTestDataFile(req.body)
    .then((resolve) => csv.makeResultDataFile())
    .then((resolve) => python.call())
    .then((resolve) => csv.readResultDataFile())
    .then((resolve) => {
      var result = resolve;
      console.log(result);
      res.render('result', { title: '結果画面', result: result });
    });
});

module.exports = router;
