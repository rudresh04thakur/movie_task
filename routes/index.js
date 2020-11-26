var express = require('express');
var querystring = require('querystring');
var movieModel = require('../models/movies');
var router = express.Router();


router.get('/movies', async (req, res, next) => {
  let name = req.query.query;
  var movie = await movieModel.findOne({ name: name });
  try {
    res.status(200).send(movie);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/movies', async (req, res, next) => {
  try {
    await req.body.forEach((movie) => {
      var movie = new movieModel(movie);
      movie.save();
    });
    res.status(200).send({ "Message": req.body.length + " Movies Save Successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/movie', async (req, res, next) => {
  var movie = new movieModel(req.body);
  try {
    await movie.save();
    res.status(200).send({ "Message": "Movie Save Successfully", "Data": movie });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
