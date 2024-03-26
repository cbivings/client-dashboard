import React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customers from '../components/Customer/Customers';
import CreateCustomer from '../components/Customer/CreateCustomer';
import UpdateCustomer from '../components/Customer/UpdateCustomer';

const Dashboard = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Customers/>} />
          <Route path="/create" element={<CreateCustomer/>} />
          <Route path="/update" element={<UpdateCustomer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
