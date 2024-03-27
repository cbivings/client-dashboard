import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const token = localStorage?.getItem("token");

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  }
}

export const SaveRow = async (row) => {
  console.log('payload', row)
  if(row.isNew) {
    return createCustomer(row);
  } else {
    return updateCustomer(row._id, row);
  }
}

export const getCustomers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getCustomer = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getCustomer/${id}`, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const updateCustomer = async (id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/updateCustomer/${id}`, data, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const createCustomer = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/createCustomer`, data, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const addCustomField = async (fieldName, fieldType) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/addCustomField`, {
      fieldName,
      fieldType,
    }, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}