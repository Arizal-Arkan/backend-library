require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const lib = express()
const port = process.env.SERVER_PORT || 7000

const userRoute = require('../Task4/main/routes/route')

lib.listen(port, () => {
  console.log(`\n App listening on port ${port} \n`)
})

lib.use(bodyParser.json())
lib.use(bodyParser.urlencoded({ extended: false }))

lib.use('/', userRoute)
