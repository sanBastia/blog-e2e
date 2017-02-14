var mongoose = require('mongoose')
var Schema = mongoose.Schema

var articleSchema = new Schema({
  title: String,
  author: String,
  body: String,
  is_deleted: Number
})

var article = mongoose.model('Article', articleSchema)

module.exports = article
