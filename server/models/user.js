var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  author: String,
  username: String,
  password: String
})

var user = mongoose.model('User', userSchema)

module.exports = user
