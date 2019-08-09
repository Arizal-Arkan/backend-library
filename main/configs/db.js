require('dotenv').config()

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'remotemysql.com',
  user: '7q682wbJYk',
  password: '0Sqy6dzSQt',
  database: '7q682wbJYk'
})

connection.connect((err) => {
  if (err) console.log(`Error: ${err}`)
})

module.exports = connection
