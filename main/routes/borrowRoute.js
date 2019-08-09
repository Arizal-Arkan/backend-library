const controller = require('../controllers/borrowControl')
const app = require('express')
const Route = app.Router()
const Auth = require('../helpers/auth')

    Route.all('/*', Auth.authInfo)
        .post('/get',controller.getBorrows)
        .post('/get/:idpinjam',controller.getBorrow)
        .post('/',controller.postBorrow)
        .patch('/:idpinjam',controller.patchBorrow)

module.exports = Route