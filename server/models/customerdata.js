const mongoose = require('mongoose');

// in a sql db I would make an array for custom fields here, but 
// I don't think you have to do that for mongodb with strict:false in the schema
const customerDataSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  date_of_birth: Date,
  status: String,
  addresses: [
    {
      address1: String,
      address2: String,
      city: String,
      state: String,
      zip: String,
    },
  ],
  phone_number: String,
  email: String
}, { strict: false }); // this is to allow for custom fields to be added to schema i think

const CustomerDataModel = mongoose.model('customer', customerDataSchema);

module.exports = CustomerDataModel;