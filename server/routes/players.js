var express = require('express')
var router = express.Router()
var Player = require('../models/models').Player

// Get all players
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

// Get single player
router.get('/:id', function (req, res) {
  var id = req.params.id
  Player.findById(id, function (err, player) {
  	res.json({
    		id: player._id,
        username: player.username,
        email: player.email
      })
  	})
})

// Update player params
router.put('/:id', function (req, res) {
  const id = req.params.id
  const params = req.body
  Player.findByIdAndUpdate(id, params, {new: true}, function(err, player) {
    if (err) {
      return res.status(500).send({ error: err });
    }
    return Player.find({}, function (err, players) {
    	res.json(players.map(player => {
        return {
      		id: player._id,
          username: player.username,
          email: player.email
        }
    	}))
    })
  });
})

// Create new player
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

// Delete player
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
