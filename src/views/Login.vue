<template>
  <div class="main">
  <Loading v-if="isLoading"/>
    <!-- 登录 -->
    <div class="login" v-show="isShow">
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
        <aside class="toggle_reg">
          <a href="#" @click="changeShow">还没有账号?赶紧来注册吧</a>
        </aside>
      </van-form>
    </div>
    <!-- 注册 -->
    <div class="register" v-show="!isShow">
      <div class="title">新用户注册</div>
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
          <van-button round block type="info" native-type="submit" @click="register">注册</van-button>
        </div>
        <aside class="toggle_log">
          <a href="#" @click="changeShow">已经有账号?赶紧来登录吧</a>
        </aside>
      </van-form>
    </div>
    <!-- 第三方登录 -->
    <article class="login_other">
      <ul class="other_icon">
        <li class="icon_right">
          <a href="https://m.mtime.cn/UniteLogin/Dispatch.mi?pid=weibo" title="新浪" class="o_sina"></a>
        </li>
        <li>
          <a href="https://m.mtime.cn/UniteLogin/Dispatch.mi?pid=qq" title="QQ" class="o_qq"></a>
        </li>
      </ul>
      <p class="agreement">
        登录成功代表您已同意
        <a href="#" class="c_green">时光网用户协议</a>和
        <a href="#" class="c_green">《隐私政策》</a>
      </p>
    </article>
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
      isShow: true,
      isLoading: true
    }
  },
  methods: {
    asyncValidator(val) {
      // console.log(val);
      return new Promise(resolve => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          // resolve(/\d{6}/.rest(val));
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
    // 登录注册切换
    changeShow() {
      this.isShow = !this.isShow;
    },
    // 登录
    login() {
      if (!this.username.trim() || !this.password.trim()) {
        Dialog({
          closeOnClickOverlay: true,
          message: "请输入用户名或密码"
        });
      } else {
        instance2
          .post("/login", {
            username: this.username,
            password: this.password
          })
          .then(res => {
            // console.log("then", res.data.token);
            sessionStorage.setItem("token", res.data.token);
            // console.log("为给我跳...");
            this.$router.replace("/member");
            // this.isShow = !this.isShow
          })
          .catch(err => {
            Dialog({ message: res.data.msg, closeOnClickOverlay: true });
            console.log("catch", err);
          });
      }
    },
    // 注册
    register() {
      if (!this.username.trim() || !this.password.trim()) {
        Dialog({
          closeOnClickOverlay: true,
          message: "请输入用户名或密码"
        });
      } else {
        instance2
          .post("/reg", {
            username: this.username,
            password: this.password
          })
          .then(res => {
            // console.log(this);
            this.isShow = !this.isShow
            this.username = ""
            this.password = ""
          })
          .catch(err => {
            Dialog({ message: err, closeOnClickOverlay: true });
            console.log("catch2", err);
          });
      }
    }
  },
  mounted () {
    // loading
    setTimeout(()=>{
    this.isLoading = false
    },1000)
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  .login,
  .register {
    .title {
      text-align: center;
      font-size: 22px;
      color: #1d2736;
      padding: 0.18rem 0;
    }
  }
  .toggle_log,
  .toggle_reg {
    margin: 0 0.3rem;
    height: 0.5rem;
    font-size: 0.16rem;
    text-align: center;
    text-decoration: underline;
    margin-top: 0.21rem;
    a {
      color: #20a0da;
    }
  }
  .login_other {
    width: 100%;
    padding-bottom: 0.81rem;
    .other_icon {
      display: flex;
      // .icon_right {
      //     justify-content: flex-end;
      //   }
      li {
        flex: 1;
        display: flex;
        justify-content: space-evenly;

        .o_sina,
        .o_qq {
          display: block;
          width: 0.41rem;
          height: 0.41rem;
          border-radius: 50%;
        }
        .o_sina {
          background: url(//static1.mtime.cn/html5/20200116143308/images/2014/o_sina.png)
            no-repeat;
          background-size: cover;
          scroll-padding-right: 20px;
        }
        .o_qq {
          background: url(//static1.mtime.cn/html5/20200116143308/images/2014/o_qq.png)
            no-repeat;
          background-size: cover;
        }
      }
    }
    .agreement {
      text-align: center;
      padding-top: 0.18rem;
      font-size: .13rem;
      .c_green {
        color: #20a0da;
        text-decoration: underline;
      }
    }
  }
}
</style>
