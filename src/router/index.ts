import { createRouter, createWebHistory } from 'vue-router'
import LayOut from '@/views/Layout/LayOut.vue'
import Login from '@/views/Login/index.vue'
import {useUserStores} from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:LayOut,
      redirect:'/index',
      children:[
        {
          path:'/roles',
          component:()=>import("@/views/Pages/RolesList.vue")
        },
        {
          path:'/user',
          component:()=>import("@/views/Pages/UserList.vue")
        },
        {
          path:'/index',
          component:()=>import("@/views/Pages/index.vue")
        }
      ]
    },
    {
      path:'/login',
      component:Login,
    }
  ]
})


router.beforeEach((to, from,next) =>{
  if(to.path === '/index'){
    // const token = localStorage.userList.token
    const UserStores:any = useUserStores()
    const token = UserStores.userList.token
    if(token){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})
export default router
