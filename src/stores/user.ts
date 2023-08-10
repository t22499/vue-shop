import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import {loginAPI} from '@/api/login'

export const useUserStores = defineStore('user',()=>{
  const router = useRouter()
  
  const userList = ref({})
  const getUserInfo = async (parms:{})=>{
    userList.value = await loginAPI(parms)
    // try{
    //   userList.value = await loginAPI(parms)
    // }catch(e){
    //   const meta = {
    //     status:401,
    //     message:'登录失败,账号密码有误',
    //   }
    //     console.error(meta);
    // }
    router.push('/')
  }

  const deleteList = ()=>{
    userList.value = {}
    router.push('/login') 
  }

  return{
    userList,
    getUserInfo,
    deleteList
  }
},{
  persist: true,
})