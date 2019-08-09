const unitModel = require('../models/model')
const unitHelp = require('../helpers/helpers')

module.exports = {
  getLib: (req, res) => {
    return res.json({ respon: 'hay' })
  },
  // All
  unitTest: (req, res) => {
    let keyword = req.query.search || ''
    unitModel.unitTest(keyword)
      .then((userResult) => {
        const result = userResult
        unitHelp.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  // // id
  unitById: (req, res) => {
    
    const byId = req.params.id
    unitModel.unitById(byId)
      .then((userResult) => {
        console.log(userResult)
        const result = userResult
        unitHelp.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  // Search by category
  unitCategory: (req, res) => {
    const category = req.params.category
    unitModel.unitCategory(category)
      .then((userResult) => {
        const result = userResult
        unitHelp.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  // Search by location
  unitLocation: (req, res) => {
    const location = req.params.location
    unitModel.unitLocation(location)
      .then((userResult) => {
        const result = userResult
        unitHelp.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  // Update
  unitUpdate: (req, res) => {
    const id = req.params.id
    const data = {
      name: req.body.name,
      writer: req.body.writer,
      location: req.body.location,
      category: req.body.category,
      description: req.body.description
    }
    unitModel.unitUpdate(id, data)
      .then((userResult) => {
        const result = userResult[0]
        unitHelp.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  // POST data
  unitAdd: async (req, res) => {
    let path = req.file.path
        let geturl = async (req) =>{
            cloudinary.config({
                cloud_name: 'dbxxfaool',
                api_key: '674248784158649',
                api_secret: 'VmI6ER9fZNwd6BFyl1gl-GkZEe8'
            })

            let data
            await cloudinary.uploader.upload(path, (result)=>{
                const fs = require('fs')
                fs.unlinkSync(path)
                data = result.url
            })

            return data
        }
        let filename = 'images/' + req.file.filename
        console.log("FILENYA: ", filename)
    
    const data = {
      image_url: await geturl,
      status:false,
      name: req.body.name,
      writer: req.body.writer,
      location: req.body.location,
      category: req.body.category,
      description: req.body.description,
      create: new Date(),
      update: new Date()
    }
    unitModel.unitAdd(data)
      .then((userResult) => {
        res.json({ ...data, id: userResult.insertId })
      })
      .catch((error) => {
        console.log(error)
      })
  },
  // Delete
  unitDelete: (req, res) => {
    const id = req.params.id
    unitModel.unitDelete(id)
      .then((userResult) => {
        const result = userResult
        unitHelp.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  patchBook: (req, res) => {
    const data = {
        writer: req.body.writer,
        updated_at: new Date(),
        description: req.body.description,
        name: req.body.name,
        image_url: req.body.image_url,
        location: req.body.location,
        category: req.body.category
    }
    const bookid = req.params.bookid
    model.patchBook(data, bookid)
        .then((results) => {
            unitHelp.response(res, { ...data, bookid, category: req.body.category }, 200)
        })
        .catch((err) => {
            console.log(err)
        })
 },
}

