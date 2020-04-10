<template>
  <div class="login">
    <div class="title">账号密码登录</div>
    <form @submit.prevent="login">
      <van-field v-model="username" placeholder="请输入用户名" />
      <van-field v-model="password" type="password" placeholder="密码" />
      <van-button round size="large" type="info">登录</van-button>

      <!-- <van-field v-model="tel" type="tel" label="手机号" />
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>-->
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button, Field, Dialog } from 'vant'

import { instance2 } from '@/utils/http'
Vue.use(Button)
Vue.use(Field)
Vue.use(Dialog)
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (!this.username.trim() || !this.password.trim()) {
        Dialog({
          closeOnClickOverlay: true,
          message: '请输入用户名或密码'
        })
      }
    /*   instance2
        .post("/api/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          //将token保存到本地存储里面去
          localStorage.setItem("token", res.token);
          //跳转到个人中心
          this.$router.replace("/member");
        })
        .catch(err => {
          Dialog({ message: err });
        }); */
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
  .van-cell {
    margin: 0.05rem;
  }
  .van-button--large {
    width: 90%;
    margin: 0.2rem;
  }
}
</style>
