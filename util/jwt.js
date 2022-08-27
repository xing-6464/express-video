const { promisify } = require('util')

const jwt = require('jsonwebtoken')

const { uuid } = require('../config/config.default')

const tojwt = promisify(jwt.sign)
const verify = promisify(jwt.verify)
// 生成token
module.exports.createToken = async userinfo => {
  return await tojwt(
    { userinfo },
    uuid,
    {
      expiresIn: 60 * 60 * 24
    }
  )
}

// 验证token
module.exports.verifyToken = async (req, res, next) => {
  let token = req.headers.authorization
  token = token ? token.split('Bearer ')[1] : null
  if (!token) {
    res.status(402).json({ error: "请传入token" })
  }
  try {
    let userInfo = await verify(token, uuid)
    next()
  } catch (error) {
    res.status(402).json({ error: '无效的token' })
  }
}
