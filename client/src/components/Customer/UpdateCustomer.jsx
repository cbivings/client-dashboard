import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function UpdateCustomer() {
  const {id} = useParams();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/getCustomer/' + id)
    .then((result) => {
      console.log(result.data);
      setFirstName(result.data.first_name);
      setLastName(result.data.last_name);
      setPhone(result.data.phone_number);
      setEmail(result.data.email);
    }).catch((err) => {console.log(err)});
  }, []); 

  const Update = (e) => {
    e.preventDefault();
    axios.put('http://localhost:3001/updateCustomer/' + id, {firstName: firstName, lastName: lastName, phone: phone, email: email})
    .then(result => {
      console.log('success', result);
      navigate('/');
    })
    .catch(err => console.log(err));
  };

  return (
    <div>
      <h1> update Customer </h1>
      <form onSubmit={Update}>
        <label>First Name</label>
        <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <label>Last Name</label>
        <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        <label>Phone</label>
        <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <label>Email</label>
        <input type="text" name="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button>Update</button>
      </form>
    </div>
  );
}

export default UpdateCustomer;