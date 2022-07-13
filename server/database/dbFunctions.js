const pool = require("./dbConfig")

const checkDb = function() {
  return pool
    .query(
      `SELECT current_database();`
    )
    .then((result) => {
      if (!result) {
        console.log('no result!')
      } else {
        console.log('result is valid')
      }
      console.log(result.rows)
      return result.rows
    })
    .catch((err) => {
      console.error(err.message)
    })
}

const addUser = function (name, email, password, pool) {
  return pool
    .query(
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;`, [name, email, password]
    )
    .then((result) => {
      // console.log(result.rows)
      return result.rows
    })
    .catch((err) => {
      console.log(err.message)
    })
}

module.exports = { checkDb, addUser }