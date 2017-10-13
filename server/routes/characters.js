var express = require('express')
var router = express.Router()
var Character = require('../models/models').Character

router.get('/characters', function(req, res) {
  Character.find({}, function (err, docs) {
  	res.render('characters', {
  		characters: docs
  	})
  })
})

router.get('/new-character', function (req, res) {
  res.render('new_character')
})

router.post('/add-character', function (req, res) {
  var params = req.body
  params.status = 'draft'
  params.game_ids = Array(req.body.game)
  params.features = [{feature_id: 0, content: "content of feature"}, {feature_id: 5, content: "Arme à feu"}]
  Character(params).save(function (err) {
  	if (err) {
  	  throw err
  	} else {
  	  res.redirect('characters')
  	}
  })
})

router.post('/delete-character', function (req, res) {
  console.log(req.body)
  var id = req.body.id
  Character.remove({
  	_id: id
  }, function (err) {
  	  if (err) {
  	  	throw err
  	  } else {
	  	res.redirect('characters')
	  }
  })
})

module.exports = router;
