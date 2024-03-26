import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getCustomer, updateCustomer } from "../../services/api"
import { makeUserDataObject } from "../../services/utils"

function UpdateCustomer() {
  const {id} = useParams()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  //show existing customer info in form
  useEffect(() => {
    getCustomer(id)
    .then((result) => {
      setFirstName(result.first_name);
      setLastName(result.last_name);
      setDateOfBirth(result.date_of_birth);
      setPhone(result.phone_number);
      setEmail(result.email);
      setAddresses(result.addresses);
    })
  }, [])

  const Update = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    updateCustomer(id, makeUserDataObject(formData))
    .then(result => {
      navigate('/')
    })
  }

  return (
    <div>
      <h1> update Customer </h1>
      <form onSubmit={Update}>
        <label>First Name</label>
        <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <label>Last Name</label>
        <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        <label>date of birth</label>
        <input type="text" name="dateOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}/>
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