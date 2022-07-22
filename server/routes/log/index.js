const express = require('express');
const router = express.Router();
const database = require('../../database')

module.exports = (db) => {

  router.post('/event/:baby_id', (req, res) => {
    const baby_id = req.params.baby_id
    console.log(baby_id)
    return res.status(200).json({ message : "Event logged successfully."})
  })

  return router
}