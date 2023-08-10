import axios from 'axios'
import  { ElLoading, ElMessage }  from 'element-plus'



export const httpInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

let loadingObj:any ={}
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  loadingObj = ElLoading.service({
    lock: true,
    text: '加载中',
  })
  return config
})

// axios响应式拦截器
httpInstance.interceptors.response.use(res => {
  loadingObj.close()
  const data = res.data
  ElMessage({
    message:data.message ,
    type: 'error',
    duration:2000
  })
  return data
}, e => {
  loadingObj.close()
    ElMessage({
      message: '服务器错误',
      type: 'error',
      duration:2000
    })

  return Promise.reject(e)
})

export default httpInstance