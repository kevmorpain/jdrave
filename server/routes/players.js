var express = require('express')
var router = express.Router()
var Player = require('../models/models').Player

router.get('/', function(req, res) {
  Player.find({}, function (err, players) {
  	res.json(players.map(player => {
      return {
    		id: player._id,
        username: player.username,
        email: player.email
      }
  	}))
  })
})

router.post('/', function (req, res) {
  var params = req.body
  Player(params).save(function (err, post) {
  	if (err) {
  	  throw err
  	} else {
  	  res.status(201).json(post)
  	}
  })
})

router.delete('/:id', function (req, res) {
  var id = req.params.id
  Player.remove({
  	_id: id
  }, function (err) {
  	  if (err) {
  	  	throw err
  	  } else {
	  	  res.status(204).send()
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
