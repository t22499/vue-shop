<script setup lang="ts">
import {onMounted,reactive,ref} from 'vue'
import {userList} from '@/api/user'
//input输入框内容
const keyWord = ref('')

//表单内容
const tableList:any = ref({})

//控制新建弹框
const addBut = ref(false)

//form表单数据
const dialog = ref({
  username:"",
  password:"",
  email:"",
  mobile:"",
})
//表单正则
const rules = reactive({
  username:{ required: true, message: '必填项请输入' },
  password:{ required: true, message: '必填项请输入' },
  email:{ required: true, message: '必填项请输入' },
  mobile:{ required: true, message: '必填项请输入' },
})

//form统一校验
const formRef:any = ref(null)

const searchList = ()=>{

}
//添加表单
const addList = ()=>{
  addBut.value = true
}

//提交
const commitList = ()=>{
  formRef.value.validate((valid:any)=>{
    if (valid){
      
    }
  })
}

const useUserList = async ()=>{
  const res = await userList()
  tableList.value = res
}


onMounted(() => {
  useUserList()
})
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

      <!-- table -->
      <el-table :data="tableList.users" style="width: 100%">
        <el-table-column prop="username" label="姓名" width="180" />
        <el-table-column prop="email" label="邮箱"  width="180" />
        <el-table-column prop="mobile" label="电话" />
        <el-table-column prop="role_name" label="角色" />
        <el-table-column prop="mg_state" label="状态">
          <template #default="scope">
            <el-switch v-model="scope.row.mg_state" />
          </template>
        </el-table-column>
        <el-table-column prop="mg_state" label="状态">
          <template #default="scope">
            <el-button type="primary">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 弹窗 -->
    <el-dialog v-model="addBut" title="新建用户">
      <el-form :model="dialog" :rules="rules" ref="formRef">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="dialog.username" placeholder="请输入账号"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="dialog.password" placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="dialog.email" placeholder="请输入邮箱"/>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="dialog.mobile" placeholder="请输入手机号"/>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="flex">
          <el-button>取消</el-button>
          <el-button type="primary" @click="commitList">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
  .input_box{
    width: 200px;
    margin-right: 15px;
  }
  .flex{
    display: flex;
  }
  
</style>