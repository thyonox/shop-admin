import axios from "axios";
import { getToken } from "./auth";
import { notify } from "./message";

// 创建axios实例
const request = axios.create({
    baseURL: '/api',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
})

// axios请求拦截器
request.interceptors.request.use(function (config) {
    const token = getToken();
    if (token) {
        config.headers['token'] = token;
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// axios响应拦截器
request.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    notify(error.response?.data?.msg || '请求失败', 'error');
    return Promise.reject(error);
  });



export default request;