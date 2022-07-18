const express = require('express');
const router = express.Router();
const database = require('../../database')

module.exports = (db) => {

  router.post('/register', async (req,res) => {
    console.log(req.body)

    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }

    await database.addUser(userData.name, userData.email, userData.password, db)
  
    let userToUse = JSON.parse(JSON.stringify(userData));
    delete userToUse.password;
    return res.status(200).json({ message : "Register successful.", user: userToUse })
  });

  router.post('/login', async (req, res) => {

    const userData = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }

    const foundUser = await database.getUser(userData.email, db)

    const foundPassword = foundUser.password

    let userToUse = JSON.parse(JSON.stringify(foundUser));
    delete userToUse.password;

    if (foundPassword === userData.password) {
      const user_name = userToUse.name
      const user_id = userToUse.id
      req.session.user_name = user_name
      req.session.user_id = user_id
      return res.status(200).json({ message : "Login successful.", user: userToUse })
    } else {
      return res.status(401).json({ message: "Invalid login information" })
    }
  })

  router.post('/logout', (req, res) => {
    req.session.user_id = null;
    req.session = null;
    return res.status(200).json({ message : "Logout successful." })
  });

  return router
}