const express = require('express')
const Route = express.Router()

const unitControl = require('../controllers/categoryControl')

Route.get('/', unitControl.getCategory)

module.exports = Route
