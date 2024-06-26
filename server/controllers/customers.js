// get all customers
const customerModel = require("../models/customerdata.js")
const mongoose = require('mongoose');
/**
 * Get all customers
 */
const getCustomers = (req, res) => {
  customerModel.find({})
  .then(customers => {
    console.log(customers)
    res.json(customers)
  })
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
  console.log(req.body)
  const id = new mongoose.Types.ObjectId();
  req.body._id = id;
  customerModel.create(req.body)
  .then(customers => res.json(customers))
  .catch(err => res.json(err))
}

/**
 * Update Customer
 */
const updateCustomer = (req, res) => {
  customerModel.findByIdAndUpdate(req.params.id, req.body)
  .then(customers => res.json(customers))
  .catch(err => res.json(err))
}

const addCustomFields = (req, res) => {
  customerModel.aggergate().addFields({test: Number}).then(result => {console.log(result)})
  // customerDataSchema.add({ [req.body.fieldName]: req.body.fieldType })
  // .then(schema => {
  //   console.log(schema)
  //   res.json(schema)
  // })
  // .catch(err => res.json(err))
}

/**
 * Bulk delete customers - this is really just changing status on all 
 * selected customers to 'churned'
 */
const bulkDeleteCustomers = (req, res) => {
  // customerModel.updateMany({ _id: { $in: req.body.ids } }, { status: 'churned' })
  // .then(customers => res.json(customers))
  // .catch(err => res.json(err))
}


module.exports = {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  addCustomFields,
}