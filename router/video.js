const express = require('express')

const videoController = require('../controller/videoController')
const vodController = require('../controller/vodController')
const router = express.Router()

router
.get('/lists', videoController.list)
.get('/getvod', vodController.getvod)

module.exports = router