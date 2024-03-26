import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { createCustomer } from "../../services/api";

function CreateCustomer() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  // const [addresses, setAddresses] = useState('');
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    createCustomer({
      first_name: firstName, 
      last_name: lastName, 
      date_of_birth: dateOfBirth,
      phone_number: phone, 
      email: email,
      addresses: [{
        // nickname: nickname,
        // address1: address1,
        // address2: address2,
        // city: city,
        // state: state,
        // zip: zip
      }]
    })
    .then((result) => {
      navigate('/');
    });
  }

  return (
    <div>
      <h1> create Customer </h1>
      <form onSubmit={Submit}>
        <label>First Name</label>
        <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)}/>
        <label>Last Name</label>
        <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)}/>
        <label>date of birth</label>
        <input type="text" name="dateOfBirth" onChange={(e) => setDateOfBirth(e.target.value)}/>
        <label>Phone</label>
        <input type="text" name="phone" onChange={(e) => setPhone(e.target.value)}/>
        <label>Email</label>
        {/* for each address */}
        {/* <input type="text" name="addresses" onChange={(e) => setAddresses(e.target.value)}/> */}
        <label>addresses</label>
        <input type="text" name="email"  onChange={(e) => setEmail(e.target.value)}/>
        <button>Submit</button>
      </form>
      
    </div>
  );
}

export default CreateCustomer;