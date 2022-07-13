const express = require('express');
const app = express();
const cors = require("cors")
const pool = require("./db")

const PORT = 5050

//middleware
app.use(cors())
app.use(express.json());

//ROUTES//

//create a user

app.post("/user", async(req, res) => {
  try {
    console.log(req.body)
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`)
})