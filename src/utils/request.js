import axios from 'axios'
import store from '@/store/index'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
}) // 创建一个axios的实例
// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (store.getters.token) {
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const { data, message, success } = response.data
  if (success) {
    return data
  } else {
    return Promise.reject(new Error(message))
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
export default service // 导出axios实例
