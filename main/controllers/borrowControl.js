const model = require('../models/borrowModel')
const response = require('../helpers/helpers')

module.exports = {
    getBorrows: (req, res) => {
        const id = req.body.id
        const role = req.body.role
        if( role === 'admin') {
            model.getBorrows(null,role)
            .then((results) => {
                result = results
                response.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
        } else {
            model.getBorrows(id)
                .then((results) => {
                    result = results
                    response.response(res, result, 200)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },

    getBorrow: (req, res) => {
        console.log('dsdsda',req.params.idpinjam)
        
        model.getBorrow(Number(req.params.idpinjam))
            .then((results) => {
                result = results
                console.log('sasas',result)
                response.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },

    postBorrow: (req, res) => {
        const data = {
            user_id: req.body.id_user,
            id_book: req.body.id_book,
            borrowed_at: new Date(),
            expired_at: new Date(new Date().setDate(new Date().getDate() + 7))
        }
        const dataBook = {
            status: true
        }
        const bookid = req.body.id_book
        model.postBorrow(data)
            .then((results) => {
                result = results
                response.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
        model.patchBook(dataBook, bookid)
            .then((results) => {
            })
            .catch((err) => {
                console.log(err)
            })
    },
    patchBorrow: (req, res) => {
        const data = {
            penalty: req.body.denda,
            returned_at: req.body.returned_at || null
        }
        const idpinjam =req.params.idpinjam
        let status = req.body.status || false
        const dataBook = { status: status }
        const bookid = req.body.id_book || 0
        model.patchBorrow(data, idpinjam)
            .then((results) => {
                response.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
        model.patchBook(dataBook, bookid)
        .then((results) => {
        })
        .catch((err) => {
            console.log(err)
        })
    },
    patchBook: (req, res) => {
    },
}