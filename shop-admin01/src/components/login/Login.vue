<template>
  <div class="login">
    <el-form :model="loginForm"
             :rules="rules"
             ref="loginForm"
             label-width="100px"
             class="demo-loginForm"
             label-position="top">

      <el-form-item label="用户名"
                    prop="name">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>

      <el-form-item label="密码"
                    prop="name">
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary"
                   @click="submitForm('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>

// 导入axios
import axios from 'axios'

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''

      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 12, message: '用户名在5到12位字符之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '密码在6到12位字符之间', trigger: 'blur' }
        ]

      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return false
        }
        // 表单验证成功是，发送请求
        axios.post('http://localhost:8888/api/private/v1/login', this.loginForm).then(res => {
          console.log(res)

          if (res.data.meta.status === 200) {
            localStorage.getItem('token', res.data.data.token)

            // 登录成功后跳转
            this.$router.push('/home')
          } else {
            this.$message({
              message: res.data.meta.msg,
              type: 'error',
              duration: 1000
            })
          }
        })
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style>
</style>
