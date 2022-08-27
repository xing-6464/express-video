const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')
const validator = require('../middleware/validator/userValidator')


router
.post('/registers', validator.register, userController.register)
.get('/lists', userController.list)
.delete('/', userController.delete)

module.exports = router