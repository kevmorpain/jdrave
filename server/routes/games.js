var express = require('express')
var router = express.Router()
var Game = require('../models/models').Game

router.get('/games', function(req, res) {
  Game.find({}, function (err, docs) {
  	res.render('games', {
  		games: docs
  	})
  })
})

router.get('/new-game', function (req, res) {
  res.render('new_game')
})

router.post('/add-game', function (req, res) {
  var params = req.body
  params.status = 'draft'
  params.characters = [0, 2]
  Game(params).save(function (err) {
  	if (err) {
  	  throw err
  	} else {
  	  res.redirect('games')
  	}
  })
})

router.post('/delete-game', function (req, res) {
  console.log(req.body)
  var id = req.body.id
  Game.remove({
  	_id: id
  }, function (err) {
  	  if (err) {
  	  	throw err
  	  } else {
	  	res.redirect('games')
	  }
  })
})

module.exports = router;
