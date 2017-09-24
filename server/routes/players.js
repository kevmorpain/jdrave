var express = require('express')
var router = express.Router()
var Player = require('../models/models').Player

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.get('/playerslist', function(req, res) {
  Player.find({}, function (err, players) {
  	res.render('playerslist', {
  		playersList: players
  	})
  })
})

router.get('/new-player', function (req, res) {
  res.render('new_player')
})

router.post('/add-player', function (req, res) {
  var params = req.body

  new Player(params).save(function (err) {
  	if (err) {
		throw err
  	} else {
  		res.redirect('playerslist')
  	}
  })
})

router.post('/delete-player', function (req, res) {
  console.log(req.body)
  var id = req.body.id
  console.log(id)
  Player.remove({
  	_id: id
  }, function (err) {
  	  if (err) {
  	  	throw err
  	  } else {
	  	res.redirect('playerslist')
	  }
  })
})

module.exports = router;
