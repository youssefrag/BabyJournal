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

const getUser = function (email, pool) {
  return pool
    .query(
      `
        SELECT * FROM parent
        WHERE parent.email = $1;
      `, [email]
    )
    .then((result) => {
      // console.log(result.rows)
      // console.log('result:', result.rows[0].password)
      return result.rows[0]
    })
    .catch((err) => {
      console.log(err.message)
    })
}

const addBaby = function (parentId, firstName, lastName, dateOfBirth, placeOfBirth, pictureUrl, pool) {
  return pool
    .query(
      `
        INSERT INTO baby (parent_id, first_name, last_name, date_of_birth, birth_location, picture_url) VALUES ($1, $2, $3, $4, $5, $6);
      `, [parentId, firstName, lastName, dateOfBirth, placeOfBirth, pictureUrl]
    )    
    .then((result) => {
      console.log('result:', result.rows)
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

module.exports = { addUser, getUser, addBaby, checkDb }