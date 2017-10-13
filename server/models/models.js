var mongoose = require('mongoose')
var Schema = mongoose.Schema
var autoIncrement = require('mongoose-auto-increment')

autoIncrement.initialize(mongoose.connection)

var Player = new Schema({
  id: {
    type: Number,
    ref: 'PlayerId'
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  birthDate: {
    type: Date,
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
})
Player.plugin(autoIncrement.plugin, 'PlayerId')

var Game = new Schema({
  id: {
    type: Number,
    ref: 'GameId'
  },
  name: {
    type: String,
    required: true
  },
  summary: {
    type: String
  },
  chapter: {
    type: Number
  },
  status: {
    type: ['draft', 'publish'],
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  lastGameDate: {
    type: Date
  },
  characters: {
    type: [Number]
  },
  gameMaster: {
    type: Number
  }
})
Game.plugin(autoIncrement.plugin, 'GameId')

var Character = new Schema({
  id: {
    type: Number,
    ref: 'CharacterId'
  },
  name: {
    type: String,
    required: true
  },
  story: {
    type: String
  },
  game_ids: {
    type: Array,
    required: true
  },
  player_id: {
    type: Number
  },
  status: {
    type: ['draft', 'publish'],
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  image: {
    type: Array
  },
  features: {
    type: Array
  },
  inventory: {
    type: Array
  }
})
Character.plugin(autoIncrement.plugin, 'CharacterId')

var Feature = new Schema({
  id: {
    type: Number,
    ref: 'FeatureId'
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: ['text', 'textarea', 'date', 'number', 'select', 'radio'],
    required: true
  },
  options: {
    type: Object
  },
  description: {
    type: String
  },
  status: {
    type: ['draft', 'publish'],
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
})
Feature.plugin(autoIncrement.plugin, 'FeatureId')

var Models = {
  Player: mongoose.model('Player', Player),
  Game: mongoose.model('Game', Game),
  Character: mongoose.model('Character', Character)
  Feature: mongoose.model('Feature', Feature)
}

module.exports = Models
