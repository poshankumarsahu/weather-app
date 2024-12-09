
import api from './api/ApiConfig';

const fetchData = async () => {
  try {
    const response = await api.get('/items');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
