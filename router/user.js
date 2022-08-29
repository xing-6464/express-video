const express = require('express')
const router = express.Router()
// 文件上传
const multer = require('multer')
const upload = multer({ dest: 'public/' })

const userController = require('../controller/userController')
const validator = require('../middleware/validator/userValidator')
const { verifyToken } = require('../util/jwt')


router
.post('/registers', validator.register, userController.register)
.post('/logins', validator.login, userController.login)
.get('/lists', verifyToken, userController.list)
.put('/', verifyToken, validator.update, userController.update)
.post('/headimgs', verifyToken, upload.single('headimg'), userController.headimg)
.delete('/', userController.delete)

module.exports = router
