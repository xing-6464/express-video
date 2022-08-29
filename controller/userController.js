const fs = require('fs')

const { promisify } = require('util')
const rename = promisify(fs.rename)

const { User } = require('../model/index')

const { createToken } = require('../util/jwt.js')

// 用户注册
exports.register = async (req, res) => {
  const userModule = new User(req.body)
  const dbBack = await userModule.save()
  user = dbBack.toJSON()
  delete user.password
  res.status(201).json({ user })
}

// 用户登录
exports.login = async (req, res) => {
  // 客户端数据验证
  // 链接数据库查询
  let dbBack = await User.findOne(req.body)
  if (!dbBack) {
    res.status(402).json({ error: '邮箱或者密码不正确' })
  }
  dbBack = dbBack.toJSON()
  dbBack.token = await createToken(dbBack)
  res.status(200).json(dbBack)
}

exports.list = async (req, res) => {
  console.log(req.user)
  res.send('/user-list')
}

// 用户修改
exports.update = async (req, res) => {
  const dbBack = await User.findByIdAndUpdate(req.user.userinfo._id, req.body, { new: true })
  res.status(202).json({ user: dbBack })
}

// 用户头像上传
exports.headimg = async (req, res) => {
  console.log(req.file)
  // {
  //   fieldname: 'headimg',
  //   originalname: 'react_new.jpeg',
  //   encoding: '7bit',
  //   mimetype: 'image/jpeg',
  //   destination: 'public/',
  //   filename: '066b83be1881fada6f9b799328cf406e',
  //   path: 'public/066b83be1881fada6f9b799328cf406e',
  //   size: 61268
  // }
  var fileArr = req.file.originalname.split('.')
  var filetype = fileArr[fileArr.length - 1]
  try {
    await rename(
      './public/' + req.file.filename,
      './public/' + req.file.filename + '.' + filetype
    )
    res.status(201).json({ filepath: `${req.file.filename}.${filetype}`})
  } catch (error) {
    res.status(500).json({ error })  
  }
}

exports.delete = async (req, res) => {
  
}