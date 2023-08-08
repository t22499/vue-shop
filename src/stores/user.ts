import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import {loginAPI} from '@/api/login'

export const useUserStores = defineStore('user',()=>{
  const router = useRouter()
  
  const userList = ref({})
  const getUserInfo = async ({account,password}:{account:string,password:string})=>{
    userList.value = await loginAPI({account,password})
    console.log(userList.value.token)
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