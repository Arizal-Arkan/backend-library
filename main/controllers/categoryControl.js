const model = require('../models/modelCategory')
const response = require('../helpers/helpers')

module.exports = {
  getCategory: (req, res) => {
    model.getCategory()
      .then((results) => {
        let result = results
        response.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
