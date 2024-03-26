import React from "react";

function CreateCustomer() {

  return (
    <div>
      <h1> create Customer </h1>
      <form>
        <label>First Name</label>
        <input type="text" name="firstName" />
        <label>Last Name</label>
        <input type="text" name="lastName" />
        <label>Phone</label>
        <input type="text" name="phone" />
        <label>Email</label>
        <input type="text" name="email"  />
        <button>Submit</button>
      </form>
      
    </div>
  );
}

export default CreateCustomer;