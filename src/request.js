import Vue from "vue";
import axios from "axios";
// 创建axios实例
const service = axios.create({
    baseURL: ' https://www.easy-mock.com/mock/5b9de8b8cea0cb6b8af5deee/chuangke', // api的base_url
    //baseURL: 'http://172.18.234.21:8080/',
    timeout: 15000, // 请求超时时间
  })
  
  // request拦截器
  service.interceptors.request.use(config => {
    //做拦截
    return config
  }, error => {
    // Do something with request error
    console.log('请求出错') // for debug
    Promise.reject(error)
  })
  
  // respone拦截器
  service.interceptors.response.use(
    response => {
      /**
      * code为非2000是抛错 可结合自己业务进行修改
      */
      /*     const res = response.data
          if (res.code !== CODE_SUCCESS) {
      
            // 5000:非法的token;
            if (res.code === CODE_JWT_ERROR) {
      
            }
            return Promise.reject('error')
          } else {
            return response.data
          } */
      return response.data
    },
    error => {
      console.log('响应出错')
      return Promise.reject(error)
    }
)
  
export default service