// axios.jsx
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://www.omdbapi.com/?i=tt0372784',
  params: {
    apikey: '80c02467',
  },
});

export default instance;
