const con = require('../configs/db')

module.exports = {
    getBorrows: (idUser,role) => {
        const query = role ? 'SELECT pinjam.*,buku.name,user.fullname,user.id as id_user FROM pinjam INNER JOIN buku ON buku.id = pinjam.id_book INNER JOIN user ON pinjam.user_id = user.id' :
        'SELECT pinjam.*,buku.name,user.fullname,user.id FROM pinjam INNER JOIN buku ON buku.id = pinjam.id_book INNER JOIN user ON pinjam.user_id = user.id where user_id= ?'
    return new Promise((resolve, reject) => {
        con.query(query,idUser, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(new Error(err))
            }
        })
    })
    },
    getBorrow: (idpinjam) => {
        console.log(idpinjam);
        
        return new Promise((resolve, reject) => {
            con.query('SELECT pinjam.* FROM pinjam where returned_at is null AND id = ?', idpinjam, (err,result) => {
                if (!err){
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    postBorrow: (data) => {
        return new Promise((resolve, reject) => {
            con.query('INSERT INTO pinjam SET ?', data,(err, result) => {
                if(!err){
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    patchBook: (data,id) => {
        console.log(id)
        
        return new Promise((resolve, reject) => {
            con.query('UPDATE buku SET ? WHERE id = ?', [data, id], (err, result) => {
                if(!err){
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    patchBorrow: (data, idpinjam) => {
        return new Promise((resolve, reject) => {
            con.query('UPDATE pinjam SET ? WHERE id =?', [data, idpinjam], (err, result) => {
                if(!err){
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}
    

