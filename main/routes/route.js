const express = require('express')
const Route = express.Router()

const unitControl = require('../controllers/controll')

Route
  .get('/', unitControl.unitTest)
  .get('/category/:category', unitControl.unitCategory)
  .get('/:id', unitControl.unitById)
  .get('/location/:location', unitControl.unitLocation)
  .post('/', unitControl.unitAdd)
  .patch('/:id', unitControl.unitUpdate)
  .delete('/:id', unitControl.unitDelete)

module.exports = Route
