const crypto = require('crypto')
module.exports = {

  response: (res, result, status, error) => {
    let statResut = {}

    statResut.error = error || null
    statResut.status_code = status || 200
    statResut.result = result

    return res.status(statResut.status_code).json(statResut)
  },

  generateSalt: (length) => {
    return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length)
  },

  setPassword: (password, salt) => {
    let hash = crypto.createHmac('arkan', salt)
    hash.update(password)
    let value = hash.digest('hex')
    return {
      salt: salt,
      passwordHash: value
    }
  }
}
