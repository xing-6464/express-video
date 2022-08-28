const mongoose = require('mongoose')
const md5 = require('../util/md5')

const baseModule = require('./baseModel.js')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    set: val => md5(val),
    select: false
  },
  phone: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: null
  },
  cover: {
    type: String,
    default: null
  },
  channeldes: {
    type: String,
    default: null
  },
  ...baseModule
})

module.exports = userSchema