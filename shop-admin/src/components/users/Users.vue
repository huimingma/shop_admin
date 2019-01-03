<template>
  <div class="user">

    <el-table :data="userList"
              stripe
              style="width: 100%">
      <el-table-column prop="username"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="email"
                       label="邮箱"
                       width="180">
      </el-table-column>
      <el-table-column prop="mobile"
                       label="电话">
      </el-table-column>
      <el-table-column prop="telephone"
                       label="用户状态">
      </el-table-column>
      <el-table-column prop="telephone"
                       label="操作">
      </el-table-column>
    </el-table>
    <el-pagination background
                   layout="prev, pager, next"
                   :total="total"
                   :page-size="pagesize"
                   :current-page='pagenum'
                   @current-change="changePage">

    </el-pagination>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  created () {
    this.getUserList()
  },

  data () {
    return {
      // 用户列表
      userList: [],
      // 总条数
      total: 0,
      // 当前页
      pagenum: 1,
      // 每页大小
      pagesize: 2
    }
  },

  methods: {
    getUserList (pagenum = 1) {
      axios.get('http://localhost:8888/api/private/v1/users', {
        params: {
          query: '',
          pagenum,
          pagesize: 2
        },
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }).then(res => {
        console.log(res)
        // 成功
        if (res.data.meta.status === 200) {
          // 获取数据成功
          this.userList = res.data.data.users
          // 设置总条数
          this.total = res.data.data.total
          // 设置当前页
          this.pagenum = res.data.data.pagenum

          // console.log(this.total)
        } else {
          // 失败（可能是token过期）
          this.$router.push('/login')
          // 清除token
          localStorage.removeItem('token')
        }
      })
    },

    // 切换获取当前页
    changePage (currentpage) {
      this.getUserList(currentpage)
    }
  }
}
</script>

<style>
</style>
