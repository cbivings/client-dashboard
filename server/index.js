const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CustomerModel = require('./models/Customers');

const app = express();
// to access server side in front end
app.use(cors());
// force data to json format
app.use(express.json());

// set up connection to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/finni");


//todo abstract localhost addresses and all that to a config file
//todo map schema snake case to model camel case
// create new customers
//todo add id to customer
app.post("/createCustomer", async (req, res) => {
  CustomerModel.create({ first_name: req.body.firstName, last_name: req.body.lastName, phone_number: req.body.phone, email: req.body.email})
  .then(customers => res.json(customers))
  .catch(err => res.json(err))
});

// get all customers
app.get("/", async (req, res) => {
  CustomerModel.find({})
  .then(customers => res.json(customers))
  .catch(err => res.json(err))
});
//get user by id
app.get("/getCustomer/:id", async (req, res) => {
  const id = req.params.id;
  CustomerModel.findById(id)
  .then(customers => res.json(customers))
  .catch(err => res.json(err))
});

// update customer
app.put("/updateCustomer/:id", async (req, res) => {
  CustomerModel.findByIdAndUpdate(req.params.id, 
    { first_name: req.body.firstName,
      last_name: req.body.lastName,
      phone_number: req.body.phone,
      email: req.body.email})
  .then(customers => res.json(customers))
  .catch(err => res.json(err))
});

//delete customer is actually just changing status to churned

//bulk delete customers, also actually just changing status to churned



app.listen(3001, () => {
  console.log('Server is running on port 3001');
});