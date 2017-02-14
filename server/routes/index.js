var express = require('express')
var router = express.Router()
var controllers = require('../controllers/article')

/* GET home page. */

router.post('/article', controllers.newArticle)
router.get('/articles', controllers.getAllArticle)
router.delete('/article', controllers.deleteArticle)

module.exports = router
