<template>
  <div class="login">

    <el-row type="flex"
            justify="center"
            align="middle"
            class="login-row">
      <el-col :xs="14"
              :sm="12"
              :md="10"
              :lg="8"
              :xl="6">
        <el-form :model="loginForm"
                 :rules="rules"
                 ref="loginForm"
                 label-width="100px"
                 class="login-form">

          <el-form-item label="用户名"
                        prop="username">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>

          <el-form-item label="密码"
                        prop="password">
            <el-input v-model="loginForm.password"
                      type="password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary"
                       @click="submitForm('loginForm')">登录</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
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
          { min: 5, max: 12, message: '用户名长度在5到12位之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '密码长度在6到12位之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 表单提交的代码逻辑
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return false
        }
        axios.post('http://localhost:8888/api/private/v1/login', this.loginForm).then(res => {
          console.log(res)

          if (res.data.meta.status === 200) {
            // 存储token
            localStorage.setItem('token', res.data.data.token)
            // 登陆成功跳转页面
            // this.$router.push({ name: 'home' })
            this.$router.push('/home')
          } else {
            // 登录失败提示用户信息
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
.login {
  height: 100%;
  background-color: #2d434c;
}

.login-row {
  height: 100%;
}

.login-form {
  min-width: 380px;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: #fff;
}
</style>
