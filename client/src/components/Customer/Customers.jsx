import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCustomers } from "../../services/api";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers()
    .then((result) => {
      setCustomers(result)
    })
  }, []);


  return (
    <div>
      <h1> Customer test </h1>
      <Link to="/create"> add+ </Link>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.phone_number}</td>
              <td>{customer.email}</td>
              <td>
                <Link to={`/update/${customer._id}`}> update</Link>
                <button>delete</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;