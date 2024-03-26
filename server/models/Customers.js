const mongoose = require('mongoose');

const CustomersSchema = new mongoose.Schema({
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
  email: String,
}, { strict: false }); // this is to allow for custom fields to be added to schema i think

const CustomerModel = mongoose.model('customers', CustomersSchema);

module.exports = CustomerModel;