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

Player.plugin(autoIncrement.plugin, 'PlayerId');

var Models = {
  Player: mongoose.model('Player', Player)
}

module.exports = Models
