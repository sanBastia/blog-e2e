var models = require('../models/article')

module.exports = {
  newArticle: function (req, res) {
    let article = {
      author: req.body.author,
      title: req.body.title,
      body: req.body.body,
      is_deleted: 0
    }
    models.create(article)
      .then(function (data) {
        res.send(data)
      }).catch(function (err) {
      res.send(err)
    })
  },
  getAllArticle: function (req, res) {
    models.find({is_deleted: 0})
      .then(function (data) {
        res.json(data)
      }).catch(function (err) {
      res.send(err)
    })
  },
  deleteArticle: function (req, res) {
    let query = {
      title: req.body.title
    }
    models.find(query)
      .then(function (data) {
        data[0].is_deleted = 1
        data[0].save(function (err) {
          if (err)
            console.log(err)
        })
        res.send('Successfully Deleted')
      }).catch(function (err) {
      res.send(err)
    })
  }

}
