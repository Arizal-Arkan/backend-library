module.exports = {

  response: (res, result, status, error) => {
    let statResut = {}

    statResut.error = error || null
    statResut.status_code = status || 200
    statResut.result = result

    return res.status(statResut.status_code).json(statResut)
  }
}
