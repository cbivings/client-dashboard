const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())

// set up connection to mongodb
const db = process.env.DB_URL
mongoose.connect(db)

//set up router
// const router = express.Router()
const customerRouter = require('./routes/customers')
app.use("/", customerRouter)

//run server
const port = process.env.PORT;
app.listen(port, () => {
  console.log('Server is running on port 3001');
});