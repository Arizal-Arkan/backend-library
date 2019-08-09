const conn = require('../configs/db')

module.exports = {
  // All
  unitTest: (search) => {
    const keyword = `%${search}%`
    return new Promise((resolve, reject) => {
      conn.query('SELECT buku.id, buku.name, buku.image_url, buku.writer, buku.location, buku.description, buku.update, buku.status, category.name as category, buku.create, buku.update FROM buku INNER JOIN category ON buku.category = category.category_id WHERE buku.name LIKE ? ',keyword, (err, result) => {
        if (!err) {
          resolve(result)
          console.log(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  unitById: (id, result) => {
    console.log(id);
    
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT buku.name, buku.writer, buku.location, buku.image_url, buku.category,
            buku.description, buku.update, buku.status
            FROM buku
            INNER JOIN category
            ON buku.category = category.category_id
            WHERE buku.id = ?`,
        id,
        (err, res) => {
          if (!err) {
            resolve(res)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },
  // Category
  unitCategory: (category) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT buku.id, buku.name, buku.image_url, buku.writer, buku.location, category.name as category, buku.create, buku.update FROM buku INNER JOIN category ON buku.category = category.category_id WHERE buku.category = ?', category, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  // Location
  unitLocation: (location) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT buku.id, buku.name, buku.image_url, buku.writer, buku.location, category.name as category, buku.create, buku.update FROM buku INNER JOIN category ON buku.category = category.category_id WHERE location = ?', location, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  // Update
  unitUpdate: (id, data) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE buku SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  // Post
  unitAdd: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO buku SET ? ', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  patchBook :(data,id) => {
    return new Promise((resolve, reject) => {
        con.query('UPDATE buku SET ? WHERE id = ?', [data, id], (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(new Error(err))
            }
        })
    })
},
  // Delete
  unitDelete: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM buku WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
