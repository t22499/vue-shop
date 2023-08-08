import login from '@/utils/http'

export const loginAPI = (parms:{})=> {
  return login({
    url:'/api/login',
    method:'POST',
    data: {
      parms
    }
  })
}