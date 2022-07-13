const express = require('express');
const router = express.Router();
const database = require('../../database')

module.exports = (db) => {

  router.get('/register', async (req,res) => {
    console.log('route was hit')

    const db = await database.checkDb
    console.log("database:", db)

    // const userData = {
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password,
    // }

    // await database.addUser(userData.name, userData.email, userData.password, db)
  
  //   let userToUse = JSON.parse(JSON.stringify(userData));
  //   delete userToUse.password;
  //   return res.status(200).json({ message : "Register successful.", user: userToUse })
  });

  return router
}