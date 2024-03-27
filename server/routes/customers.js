const express = require('express')
const { 
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  addCustomFields
} = require('../controllers/customers')
const auth = require('../middleware/auth')
const router = express.Router()

router.get("/", auth, getCustomers)

router.get("/getCustomer/:id", auth, getCustomer)

router.post("/createCustomer", auth, createCustomer )

router.put("/updateCustomer/:id", auth, updateCustomer)

router.post("/addCustomField", auth, addCustomFields)

// router bulk delete customers

module.exports = router;