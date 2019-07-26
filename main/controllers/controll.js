const unitModel = require('../models/model')
const unitHelp = require('../helpers/helpers')

module.exports = {
  getLib: (req, res) => {
    return res.json({ respon: 'hay' })
  },
  // All
  unitTest: (req, res) => {
    const secname = req.query.secname
    unitModel.unitTest(secname)
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
    console.log(req.params.id)
    const byId = req.params.id
    unitModel.unitById(byId)
      .then((userResult) => {
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
    const data = {
      image_url: req.body.image_url,
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
        const result = userResult
        unitHelp.response(res, result, 200)
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
  }
}
