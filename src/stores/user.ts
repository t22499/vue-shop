import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import {loginAPI} from '@/api/login'

export const useUserStores = defineStore('user',()=>{
  const router = useRouter()
  
  const userList = ref({})
  const getUserInfo = async (parms:{})=>{
    userList.value = await loginAPI(parms)
    console.log(parms)
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