const express = require('express');
const router = express.Router();
const dbFunctions = require('../database/dbFunctions')

router.get('/checkDb',async (req,res) => {
  console.log('route was hit')
  const db = await dbFunctions.checkDb
  console.log('connected db:', db)
})

module.exports = router;