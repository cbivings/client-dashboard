import React from "react";

function UpdateCustomer() {
  return (
    <div>
      <h1> update Customer </h1>
      <form>
        <label>First Name</label>
        <input type="text" name="firstName" />
        <label>Last Name</label>
        <input type="text" name="lastName" />
        <label>Phone</label>
        <input type="text" name="phone" />
        <label>Email</label>
        <input type="text" name="email"  />
        <button>Update</button>
      </form>
    </div>
  );
}

export default UpdateCustomer;