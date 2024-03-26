const express = require('express')
const { 
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer
} = require('../controllers/customers')
const { create } = require('../models/customerdata')

const router = express.Router()

router.get("/", getCustomers)

router.get("/getCustomer/:id", getCustomer)

router.post("/createCustomer", createCustomer )

router.put("/updateCustomer/:id", updateCustomer)

module.exports = router;