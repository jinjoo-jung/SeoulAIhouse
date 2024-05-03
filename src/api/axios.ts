import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem('accessToken');

    config.headers['Content-Type'] = 'application/json';
    config.headers.Authorization = `Bearer ${accessToken}`;
    config.headers.Accept = 'application/json';

    return config;
  },

  (error) => {
    console.log('axios request:', error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 404) {
      const code = error.response.data.response_code;
      console.log('response_code:', code);

      return Promise.reject(code);
    }

    return Promise.reject(error);
  },
);
export default instance;
