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
  unitAdd: (req, res) => {
    console.log(req.file)
    console.log(req.body)
    
    const data = {
      image_url: `http://192.168.6.135:2001/${req.file.filename}`,
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

