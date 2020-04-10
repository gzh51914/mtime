<template>
  <div class="login">
    <div class="title">账号密码登录</div>
    <van-form validate-first @submit.prevent="onFailed">
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
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import { Button, Field, Dialog, Form, Toast } from "vant";

import { instance2 } from "@/utils/http";
Vue.use(Button);
Vue.use(Field);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(Toast);
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    asyncValidator(val) {
      return new Promise(res => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          res(/\d{6}/.rest(val));
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  .title {
    text-align: center;
    font-size: 22px;
    color: #1d2736;
    padding: 0.18rem 0;
  }
}
</style>
