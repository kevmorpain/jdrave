var express = require('express')
var router = express.Router()
var Player = require('../models/models').Player

router.get('/players', function(req, res) {
  Player.find({}, function (err, players) {
  	res.render('players', {
  		players: players
  	})
  })
})

router.get('/new-player', function (req, res) {
  res.render('new_player')
})

router.post('/add-player', function (req, res) {
  var params = req.body
  Player(params).save(function (err) {
  	if (err) {
  	  throw err
  	} else {
  	  res.redirect('players')
  	}
  })
})

router.post('/delete-player', function (req, res) {
  console.log(req.body)
  var id = req.body.id
  Player.remove({
  	_id: id
  }, function (err) {
  	  if (err) {
  	  	throw err
  	  } else {
	  	res.redirect('players')
	  }
  })
})



router.post('/user/login', (req, res) => {
  var params = req.body

  Player.findOne({username: params.username, password: params.password}, (err, player) => {
    if (err) {
      res.status(500).send({ error: "Une erreur inattendue vient de surgir." })
    }
    else if (!player){
      res.status(422).send({ error: "N'aurais-tu pas oublié tes identifiants ?" })
    }
    else {
      res.json('Connexion réussie !')
    }
  })
})

module.exports = router;
