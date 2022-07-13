const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

const pool = require("./database/dbConfig")

const PORT = 5050

const authRoutes = require('./routes/auth')

//middleware
app.use(cors())
app.use(express.json());

//ROUTES//

app.use('/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`)
})