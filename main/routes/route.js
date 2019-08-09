const express = require('express')
const Route = express.Router()
const multer = require('multer')
const unitControl = require('../controllers/controll')

const storage = multer.diskStorage({
  destination:(req,file,cb) => {
    cb(null,'./main/uploads/')
  },
  filename:(req,file,cb) => {
    cb(null,`${new Date().getTime()}${file.originalname}`)
  }
})

const upload = multer({ storage:storage })

Route
  .get('/', unitControl.unitTest)
  .get('/category/:category', unitControl.unitCategory)
  .get('/:id', unitControl.unitById)
  .get('/location/:location', unitControl.unitLocation)
  .post('/',upload.single('image_url') ,unitControl.unitAdd)
  .patch('/:id', unitControl.unitUpdate)
  .delete('/:id', unitControl.unitDelete)

module.exports = Route
