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
