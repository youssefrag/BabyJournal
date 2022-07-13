const express = require('express');
const router = express.Router();
const dbFunctions = require('../database/dbFunctions')

module.exports = (db) => {

  router.get('/checkDb',async (req,res) => {
    console.log('route was hit')
    const db = await dbFunctions.checkDb
    console.log('connected db:', db)
  })
  
  router.post('/register', async (req,res) => {
    console.log('route hit!')
    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }
  
    await dbFunctions.addUser(userData.name, userData.email, userData.password, db)
  
    let userToUse = JSON.parse(JSON.stringify(userData));
    delete userToUse.password;
    return res.status(200).json({ message : "Register successful.", user: userToUse })
  });

  return router
}
