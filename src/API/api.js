import axios from 'axios';

axios.defaults.baseURL = 'https://fooddeliveryapp-api.onrender.com';

export const fetchShops = async () => {
  const response = await axios.get(`/`);
  return response.data;
};

export const fetchById = async id => {
  const response = await axios.get(`/${id}`);
  return response.data;
};

export const addOrder = async body => {
  try {
    const response = await axios.post(`/cart`, body);

    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
