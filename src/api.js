import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/S2IOagdz8XpNyiilVM7igaIIs5K9C69B',
});

const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
  },
};

export default api;
