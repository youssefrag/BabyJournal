const { query } = require("express")

const addUser = function(name, email, password, pool) {
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

const getUser = function(email, pool) {
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

const addBaby = function(parentId, firstName, lastName, dateOfBirth, placeOfBirth, pictureUrl, pool) {
  return pool
    .query(
      `
        INSERT INTO baby (parent_id, first_name, last_name, date_of_birth, birth_location, picture_url) VALUES ($1, $2, $3, $4, $5, $6);
      `, [parentId, firstName, lastName, dateOfBirth, placeOfBirth, pictureUrl]
    )    
    .then((result) => {
      // console.log('result:', result.rows)
    })
    .catch((err) => {
      console.log(err.message)
    })
}

const getBabiesForParent = function(parentId, pool) {
  return pool
    .query(
      `
        SELECT * FROM baby
        WHERE baby.parent_id = $1;
      `, [parentId]
    )
    .then((result) => {
      return result.rows
    })
    .catch((err) => {
      console.log(err.message)
    })
}

const getBabyDetails = function(babyId, pool) {
  return pool
    .query(
      `
        SELECT * FROM baby
        WHERE baby.id = $1;
      `, [babyId]
    )
    .then((result) => {
      return result.rows
    })
    .catch((err) => {
      console.log(err.message)
    })
}

const addEventLog = function(babyId, type, details, date, pool) {
  return pool
    .query(
      `
        INSERT INTO event (baby_id, event_type, event_detail, event_date) VALUES ($1, $2, $3, $4);
      `, [babyId, type, details, date]
    )
    .catch((err) => {
      console.log(err.message)
    })
}

const addMeasurementLog = function(babyId, type, amount, date, pool) {
  return pool
    .query(
      `
        INSERT INTO measurement (baby_id, measurement_type, measurement_amount, measurement_date) VALUES ($1, $2, $3, $4);
      `, [babyId, type, amount, date]
    )
    .catch((err) => {
      console.log(err.message)
    })
}

const getMeasurementLogs = function(babyId, pool) {
  return pool
    .query(
      `
        SELECT * FROM measurement
        WHERE baby_id = $1;
      `, [babyId]
    )
    .catch((err) => {
      console.log(err.message)
    })   
}

const getLogsForDate = function(date, pool) {
  return pool
    .query(
      `
        SELECT * FROM event
        WHERE event_date = $1;
      `, [date]
    )
    .catch((err) => {
      console.log(err.message)
    })  
}

module.exports = { addUser, getUser, addBaby, getBabiesForParent, getBabyDetails, addEventLog, addMeasurementLog, getMeasurementLogs, getLogsForDate }