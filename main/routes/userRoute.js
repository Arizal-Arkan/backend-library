const express = require('express')
const Route = express.Router()

const UserController = require('../controllers/userControll')
const Auth = require('../helpers/auth')

Route.get('/', UserController.getUsers)
  .post('/register', UserController.postUser)
  .post('login', UserController.getByEmail)

module.exports = Route
