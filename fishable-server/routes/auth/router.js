
var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlParser = bodyParser.urlencoded({ extended: true })
router.use(jsonParser) // to support JSON-encoded bodies
router.use(urlParser) // to support URL-encoded bodies
const controllers = require('./index.js');


router.route('/login')
  .post(controllers.login)

router.route('/register')
  .post(controllers.register)


module.exports = router
