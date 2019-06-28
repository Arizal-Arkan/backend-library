const unitModel = require('../models/model')
const unitHelp = require('../helpers/helpers')

module.exports = {
  getLib: (req, res) => {
    return res.json({ respon: 'hay' })
  },
  // All
  unitTest: (req, res) => {
    unitModel.unitTest()
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
      category: req.body.category
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
      name: req.body.name,
      writer: req.body.writer,
      location: req.body.location,
      category: req.body.category,
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
