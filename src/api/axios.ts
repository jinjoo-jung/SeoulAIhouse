import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use(
  (config) => {
    // const accessToken = sessionStorage.getItem('accessToken');
    // console.log(accessToken);

    // if (accessToken) {
    //   config.headers['Authorization'] = `Bearer ${accessToken}`;
    // }
    const accessToken = sessionStorage.setItem(
      'accessToken',
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1N2I4NjI2Ni0yNjYwLTQzZGUtODliZS0xYTViZWRhYTI3OTgiLCJpYXQiOjE3MTUyMTQ0NjUsImV4cCI6MjA3NTIxNDQ2NX0.KAQJn60rotXW2WJwOGtVfPqi0mYgXyMRW5qwe8yAT-c',
    );
    config.headers['Authorization'] = `Bearer ${accessToken}`;

    config.headers['Content-Type'] = 'application/json';
    // config.headers.Authorization = `Bearer ${accessToken}`;
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
    console.log('response:', response);
    return response;
  },
  async (error) => {
    if (error) {
      // const code = error.response;
      console.log('response_code:', error);

      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);
export default instance;
