import axios from 'axios'
// import { ElMessage } from 'element-plus'

export const httpInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
})

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {

  return Promise.reject(e)
})

export default httpInstance