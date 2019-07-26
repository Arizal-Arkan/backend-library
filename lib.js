require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const lib = express()
const port = process.env.SERVER_PORT || 7000
const cors = require('cors')
const logger = require('morgan')
const xssFilter = require('x-xss-protection')
const routeUser = require('../Task4/main/routes/route')
const categoryRoute = require('./main/routes/categoryRoute')
const userRoute = require('./main/routes/userRoute')
const whitelist = process.env.WHITELIST

var corsOptions = (req, callback) => {
  if (whitelist.split(',').indexOf(req.hostname) !== -1) {
    console.log('Succses')
    return callback(null, {
      origin: true
    })
  } else {
    console.log('Failed')
    return callback(null, {
      origin: false
    })
  }
}

lib.use(cors(corsOptions))
lib.options('*', cors(corsOptions))
lib.use(xssFilter)
lib.use(logger('div'))

lib.listen(port, () => {
  console.log(`\n App listening on port ${port} \n`)
})

lib.use(bodyParser.json())
lib.use(bodyParser.urlencoded({ extended: false }))

lib.use('/book', routeUser)
lib.use('/category', categoryRoute)
lib.use('/user', userRoute)
