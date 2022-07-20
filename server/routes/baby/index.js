const express = require('express');
const router = express.Router();
const database = require('../../database')

module.exports = (db) => {

  router.post('/new', (req,res) => {
    console.log('route was hit!')
    console.log(req.body)
  })

  return router
}