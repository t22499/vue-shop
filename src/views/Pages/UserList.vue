<script setup>
import {ref} from 'vue'
    const keyWord = ref('')
    const searchList = ()=>{

    }
    const addList = ()=>{
      
    }

</script>

<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator=">">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>账号列表</el-breadcrumb-item>
  </el-breadcrumb>
    <!-- 白色内容区域 -->
    <div class="page_content">
      <div class="flex">
        <div class="input_box">
          <el-input
            v-model="keyWord"
            placeholder="点击查找"
            class="input-with-select"
          >
            <template #append>
              <el-button @click="searchList"><el-icon><Search /></el-icon></el-button>
            </template>
          </el-input>
        </div>
        <el-button type="primary" @click="addList">新建用户</el-button>
      </div>
    </div>
    userlist
  </div>
</template>

<style lang="scss" scoped>
  .input_box{
    width: 200px;
    margin-right: 15px;
  }
  
</style>