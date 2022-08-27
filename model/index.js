const mongoose = require('mongoose')

const { mongopath } = require('../config/config.default')

async function main() {
  mongoose.connect(mongopath)
}

main()
.then(res => {
  console.log('mongo链接成功')
})
.catch(err => {
  console.log(err)
  console.log('mongo链接失败')
})

module.exports = {
  User: mongoose.model('User', require('./userModel'))
}
