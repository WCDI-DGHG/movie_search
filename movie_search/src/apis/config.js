import axios from 'axios';

const createInstance = axios.create({
  baseURL: process.env.REACT_APP_NAVER_API_URL,
  headers: {
    'content-type': 'application/json',
    'x-naver-client-id': process.env.REACT_APP_X_NAVER_CLIENT_ID,
    'x-naver-client-secret': process.env.REACT_APP_X_NAVER_CLIENT_SECRET,
    // 'Access-Control-Allow-Origin': '*',
  },
  // withCredentials: true,
  timeout: 5000,
});
export const request = createInstance;
