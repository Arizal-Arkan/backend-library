const model = require('../models/modelCategory')
const response = require('../helpers/helpers')

module.exports = {
  getCategory: (req, res) => {
    model.getCategory()
      .then((results) => {
        let result = results
        console.log("nhununhn");
        
        response.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
