<template>
  <div class="login">
    <div class="title">账号密码登录</div>
    <van-form validate-first @submit.prevent="onFailed">
      <!--
        username: admin
        password: 123456
      -->
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        :rules="[{ required: true, message: '请填写用户名'}]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        :rules="[{ required: true, message: '请填写密码',validator: asyncValidator}]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="login">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button, Field, Dialog, Form, Toast } from 'vant'

import { instance2 } from '@/utils/http'
Vue.use(Button)
Vue.use(Field)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(Toast)
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    asyncValidator (val) {
      console.log(val)
      return new Promise(res => {
        Toast.loading('验证中...')

        setTimeout(() => {
          Toast.clear()
          // res(/\d{6}/.rest(val));
        }, 1000)
      })
    },
    onFailed (errorInfo) {
      console.log('failed', errorInfo)
    },

    login () {
      if (!this.username.trim() || !this.password.trim()) {
        Dialog({
          closeOnClickOverlay: true,
          message: '请输入用户名或密码'
        })
      } else {
        instance2
          .post('/api/login', {
            username: this.username,
            password: this.password
          })
          .then(res => {
            // console.log('then', res.data.token)
            sessionStorage.setItem('token', res.data.token)
            // console.log('为给我跳...')
            this.$router.replace('/member')
          })
          .catch(err => {
            Dialog({ message: res.data.msg, closeOnClickOverlay: true })
            // console.log('catch', err)
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  .title {
    text-align: center;
    font-size: 22px;
    color: #1d2736;
    padding: 0.18rem 0;
  }
  padding-bottom: 2.14rem;
}
</style>
