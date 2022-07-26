const express = require('express');
const router = express.Router();
const database = require('../../database')

module.exports = (db) => {

  router.post('/event/:baby_id', async (req, res) => {
    const baby_id = req.params.baby_id
    const { type, date, details} = req.body
    await database.addEventLog(baby_id, type, details, date, db)
    return res.status(200).json({ message : "Event logged successfully."})
  })

  router.post('/measurement/:baby_id', async (req, res) => {
    const baby_id = req.params.baby_id
    const { type, date, amount} = req.body
    await database.addMeasurementLog(baby_id, type, amount, date, db)
    return res.status(200).json({ message : "Measurement logged successfully."})
  })

  router.get('/measurement/:baby_id', async (req,res) => {
    const baby_id = req.params.baby_id
    const measurementLogs = await database.getMeasurementLogs(baby_id, db)
    res.status(200).json(measurementLogs.rows)
  })

  router.get('/event/:date', async (req, res) => {
    const date = req.params.date
    const logsForDate = await database.getLogsForDate(date, db)
    res.status(200).json(logsForDate.rows)
  })

  return router
}