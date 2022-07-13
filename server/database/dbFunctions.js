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

module.exports = { checkDb }