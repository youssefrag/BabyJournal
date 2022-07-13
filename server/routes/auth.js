const express = require('express');
const router = express.Router();

router.post('/checkDb', (req,res) => {
  console.log('route was hit')
})

module.exports = router;