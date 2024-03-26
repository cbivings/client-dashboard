const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
// to access server side in front end
app.use(cors());
// force data to json format
app.use(express.json());

app.listen(3001, () => {
  console.log('Server is running on port 3001');
})