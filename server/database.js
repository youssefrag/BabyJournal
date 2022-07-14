const addUser = function (name, email, password, pool) {
  return pool
    .query(
      `INSERT INTO parent (name, email, password) VALUES ($1, $2, $3) RETURNING *;`, [name, email, password]
    )
    .then((result) => {
      // console.log(result.rows)
      return result.rows
    })
    .catch((err) => {
      console.log(err.message)
    })
}

const checkDb = function(pool) {
  return pool
    .query(
      `SELECT current_database();`
    )
    .then((result) => {
      console.log('result:', result.rows)
    })
    .catch((err) => {
      console.log(err.message)
    })
}

module.exports = { addUser, checkDb }