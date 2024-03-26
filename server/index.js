const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

// set up connection to mongodb
const db = process.env.DB_URL
mongoose.connect(db).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Failed to connect to MongoDB', err);
})

//set up router
const customerRouter = require('./routes/customers')
app.use("/", customerRouter)
const authRouter = require("./routes/auth")
app.use("/auth", authRouter);


//run server
const port = process.env.PORT;
app.listen(port, () => {
  console.log('Server is running on port 3001');
});