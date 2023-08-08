import login from '@/utils/http'

export const loginAPI = ({account , password}:{account:string,password:string})=> {
  return login({
    url:'/login',
    method:'POST',
    data: {
      account,
      password
    }
  })
}