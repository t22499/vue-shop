import login from '@/utils/http'

export const userList = ()=>{
  return login({
    url:'/api/tableList'
  })
}