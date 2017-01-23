var express = require('express');
var router = express.Router();
var models = require('../models/subtitle');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/subtitles');

router.route('/')
  .get(function(req, res) {
    models.Subtitle.find({}, function(err, subtitles) {
    var subtitlesList = [];
    subtitles.forEach(function(subtitle){
      subtitlesList.push({
        title: subtitle.title,
        id: subtitle._id
      });
    });
    res.send(subtitlesList);
  });
});

router.route('/')
  .post(function(req, res) {

  });

router.route('/script/:id')
.get(function(req, res) {
  // search by ObjectId
  models.Subtitle.findById(req.params.id, function(err, subtitle) {
    res.send(subtitle);
  });

});


module.exports = router;
