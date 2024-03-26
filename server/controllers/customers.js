// get all customers
const customerModel = require("../models/customerdata.js")

/**
 * Get all customers
 */
const getCustomers = (req, res) => {
  customerModel.find({})
  .then(customers => res.json(customers))
  .catch(err => res.json(err))
}

/**
 * Get customer by ID
 */
const getCustomer = (req, res) => {
  const id = req.params.id;
  customerModel.findById(id)
  .then(customers => res.json(customers))
  .catch(err => res.json(err))
}

/**
 * Create a new customer
 */
const createCustomer = (req, res) => {
  customerModel.create({ first_name: req.body.firstName, last_name: req.body.lastName, phone_number: req.body.phone, email: req.body.email})
  .then(customers => res.json(customers))
  .catch(err => res.json(err))
}

/**
 * Update Customer
 */
const updateCustomer = (req, res) => {
  customerModel.findByIdAndUpdate(req.params.id)
  .then(customers => res.json(customers))
  .catch(err => res.json(err))
}


module.exports = {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer
}