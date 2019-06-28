const conn = require('../configs/db')

module.exports = {
  // All
  unitTest: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT buku.id, buku.name, buku.writer, buku.location, category_id.name as category, buku.create, buku.update FROM buku INNER JOIN category_id ON buku.category = category_id.category', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  // Category
  unitCategory: (category) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT buku.id, buku.name, buku.writer, buku.location, category_id.name as category, buku.create, buku.update FROM buku INNER JOIN category_id ON buku.category = category_id.category WHERE buku.category = ?', category, (err, result) => {
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
      conn.query('SELECT buku.id, buku.name, buku.writer, buku.location, category_id.name as category, buku.create, buku.update FROM buku INNER JOIN category_id ON buku.category = category_id.category WHERE location = ?', location, (err, result) => {
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
