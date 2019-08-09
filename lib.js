require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.SERVER_PORT
const bodyParser = require('body-parser')
const bookRouter = require('./main/routes/route')
const categoryRouter = require('./main/routes/categoryRoute')
const userRouter = require('./main/routes/userRoute')
const pinjamRouter = require('./main/routes/borrowRoute')
const cors = require('cors')
const xss = require('x-xss-protection')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const whitelist = '127.0.0.1,192.168.6.135'
const corsOption = (req, callback) => {
  if (whitelist.split(',').indexOf(req.hostname) !== -1) {
    console.log('Success')
    return callback(null, {
      origin: true
    })
  } else {
    console.log('Failed')
    return callback('Not allowed by CORS', {
      origin: false
    })
  }
}
app.use(xss())
app.use(cors())
app.options('*', cors(corsOption))
app.listen(port, () => {
  console.log(`Kamu di ${port}`)
})
app.use(express.static('./main/uploads'))
app.use('/book', bookRouter)
app.use('/user', userRouter)
app.use('/category', categoryRouter)
app.use('/pinjam', pinjamRouter)