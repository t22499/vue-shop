<script setup lang="ts">
import {useUserStores} from '@/stores/user'
const userStores = useUserStores()

const signOut = ()=>{
  userStores.deleteList()
}

</script>
<template setup>
 <div class="common-layout">
    <el-container>
      <el-header class="common-header flex-float">
        <div class="flex">
          <img class="logo" src="../../assets/logo.svg" alt="">
          <h1 class="title">商铺后台管理系统</h1>
        </div>
        <el-button type="danger" @click="signOut" >退出</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px" class="common-aside">
            <router-link  to="/index">角色列表</router-link>
            
            <el-menu
              background-color="none"
              text-color="#fff"
              :router="true"
            >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Avatar /></el-icon>
              <span>账号管理</span>
            </template>
              <el-menu-item index="/user">
                <el-icon><Menu /></el-icon>
                <span  >用户列表</span>
              </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><Box /></el-icon>
              <span>角色管理</span>
            </template>
              <el-menu-item index="2-1">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
              </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><List /></el-icon>
              <span>商品管理</span>
            </template>
              <el-menu-item index="2-1">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
              </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon><Tickets /></el-icon>
              <span>订单管理</span>
            </template>
              <el-menu-item index="2-1">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
              </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>
              <el-icon><Platform /></el-icon>
              <span>数据统计</span>
            </template>
              <el-menu-item index="2-1">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
              </el-menu-item>
          </el-sub-menu>
        </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.el-container{
  height: 100vh;
  overflow: hidden;
}
.common-header{
  background: rgb(48, 55, 65);
  .flex{
    display: flex;
    align-items: center;
    .logo{
    width: 80px;
    }
    .title{
      color: #fff;
    } 
  }
} 
.common-aside{
  background: rgb(48, 55, 65);
}
.flex-float{
  display: flex;
  justify-content:space-between;
  align-items: center;
}
.el-main{
  background-color: #efefef;
}
</style> 