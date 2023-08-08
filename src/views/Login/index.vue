<script setup lang="ts">
import { ref } from 'vue';
import {useUserStores} from '@/stores/user'
import { useRouter } from 'vue-router';

const router =  useRouter()

const userStores = useUserStores()
const form = ref({
  account:'liutian',
  password:'123456',
})

//准备规则对象
const rules = {
  account:[
    {required:true,message:'用户名不可用',trigger:'blur'},
    {min:6,max:14,message:'用户名最小长度为6,最长为14',trigger:'blur'}
  ],
  password:[
  {required:true,message:'密码不能为空',trigger:'blur'},
  {min:6,max:14,message:'密码最小长度为6,最长为14',trigger:'blur'}
  ]
}

const formRef = ref()
// const {username,password} = form.value
const Login = ()=>{
  formRef.value.validate((valid:boolean)=>{
    console.log(valid)
    if(valid){
      // console.log(username)
      // console.log(password)
      console.log(form.value.account)
      console.log(form.value.password)
      userStores.getUserInfo({account:form.value.account,password:form.value.password})
      
      //跳转到login
      router.push('/')
    }
  })
}
</script>

<template>
  <div class="login-wrap">
    <div class="form-wrap">
      <el-form
      :model="form"
      :rules="rules"
      status-icon
      hide-required-asterisk
      ref="formRef"
      >
        <el-form-item label="账号" prop="account">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码"  prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button >注册</el-button>
          <el-button type="primary" @click="Login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-wrap{
  width: 100%;
  height: 100vh;
  background-color: rgb(56, 86, 139);
  position: relative;
  .form-wrap{
    width: 400px;
    height: 260px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgb(255, 255, 255);
    padding: 80px;
    border-radius: 15px;
  }
}
</style>