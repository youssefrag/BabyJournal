const express = require('express');
const router = express.Router();
const database = require('../../database')

module.exports = (db) => {

  router.post('/new', async (req,res) => {
    const babyData = {
      parentId: req.body.parent_id,
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      dateOfBirth: req.body.date_of_birth,
      placeOfBirth: req.body.birth_location,
      pictureUrl: req.body.picture_url,
    }

    await database.addBaby(babyData.parentId, babyData.firstName, babyData.lastName, babyData.dateOfBirth, babyData.placeOfBirth, babyData.pictureUrl, db)

    let babyUsed = JSON.parse(JSON.stringify(babyData))
    return res.status(200).json({ message : "Baby added successfully.", baby: babyUsed })
  })

  router.get('/babies_of_parent/:parent_id', async (req, res) => {
    const parentId = req.params.parent_id;
    const babyList = await database.getBabiesForParent(parentId, db)
    res.status(200).json(babyList)
  })


  return router
}