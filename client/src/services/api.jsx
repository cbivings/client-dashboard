import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export const getCustomers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getCustomer = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getCustomer/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const updateCustomer = async (id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/updateCustomer/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const createCustomer = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/createCustomer`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}