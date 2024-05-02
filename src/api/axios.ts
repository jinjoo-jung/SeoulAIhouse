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
    const originalRequest = error.config;

    // // 엑세스 토큰 만료되었을 때
    // if (error.response.status === 401 && !originalRequest.retry) {
    //   originalRequest.retry = true;
    //   if (error.response.data.response_code === 'C40102') {
    //     localStorage.removeItem('accessToken');
    //     localStorage.removeItem('refreshToken');
    //     window.location.href = '/signin'; // 메인 페이지로 리디렉션
    //     return Promise.reject('Refresh token expired');
    //   }
    //   try {
    //     const refreshToken = localStorage.getItem('refreshToken');

    //     const response = await instance.post('/auth/token', {
    //       refresh_token: refreshToken,
    //     });
    //     localStorage.setItem('accessToken', response.data.access_token);
    //     localStorage.setItem('refreshToken', response.data.refresh_token);

    //     originalRequest.headers.Authorization = `Bearer ${response.data.access_token}`;

    //     return instance(originalRequest);
    //   } catch (error) {
    //     console.log('failed to refresh access token', error);
    //   }
    // }
    if (error.response.status === 404) {
      const code = error.response.data.response_code;
      console.log('response_code:', code);

      return Promise.reject(code);
    }

    return Promise.reject(error);
  },
);
export default instance;
