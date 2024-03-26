import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function CreateCustomer() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, phone, email);
    axios.post('http://localhost:3001/createCustomer', {firstName: firstName, lastName: lastName, phone: phone, email: email})
    .then((result) => {
      console.log('success', result);
      navigate('/');
    })
    .catch((err) => {console.log(err)});
  }

  return (
    <div>
      <h1> create Customer </h1>
      <form onSubmit={Submit}>
        <label>First Name</label>
        <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)}/>
        <label>Last Name</label>
        <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)}/>
        <label>Phone</label>
        <input type="text" name="phone" onChange={(e) => setPhone(e.target.value)}/>
        <label>Email</label>
        <input type="text" name="email"  onChange={(e) => setEmail(e.target.value)}/>
        <button>Submit</button>
      </form>
      
    </div>
  );
}

export default CreateCustomer;