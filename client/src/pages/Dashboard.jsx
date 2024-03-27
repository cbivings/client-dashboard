import React, { useState, useEffect } from "react";
import Customers from '../components/Customer/Customers';
import TopBar from '../components/global/TopBar';
import { Box, Paper, Drawer } from "@mui/material";
import { createCustomer, updateCustomer, getCustomers } from "../services/api";
import { makeUserDataObject } from "../services/utils"



const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [drawertype, setDrawerType] = useState('add');
  const [customers, setCustomers] = useState([]);
  const [customerId, setCustomerId] = useState(null);

  async function refreshCustomers() {
    const response = getCustomers()
    .then((result) => {
      setCustomers(result)
    })
  }

  

  useEffect(() => {
    refreshCustomers()
  }, []);

  return (
    <Box>
      <TopBar/>
      <Paper elevation={2} square={false} sx={{ margin:"2rem 1.5rem", height:"100%", marginTop:"6em"}}>
        {customers.length &&
          <Customers customers={customers} />
        }
      </Paper>
    </Box>
  );
};
export default Dashboard;
