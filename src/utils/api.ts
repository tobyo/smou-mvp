import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';

export const fetchBikeStations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/bike-stations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bike stations:', error);
    throw error;
  }
};