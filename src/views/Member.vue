<template>
  <div class="member">
    <section class="m-container">
      <!-- header -->
      <article class="user-msg">
        <!--用户信息 -->
        <div class="table_v_c">
          <i class="i_block i_set_face">
            <img
              class="m_img"
              src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg2.mtime.cn%2Fimages%2Fdefault%2Fhead.gif&amp;width=100&amp;height=100&amp;clipType=4"
              alt="你打篮球很像蔡徐坤"
            />
          </i>
          <dl>
            <dt>
              <i class="i_grade">M0</i>
              <b>你打篮球很像蔡徐坤</b>
            </dt>
            <dd>
              <b>余额：¥0</b>
            </dd>
          </dl>
        </div>
      </article>
      <!-- shoptool -->
      <aside class="my_shoptool">
        <ul>
          <li>
            <a href="#">
              <i class="i_cat"></i>
              <p>购物车</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="i_movie"></i>
              <p>电影票订单</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="i_shop"></i>
              <p>商品订单</p>
            </a>
          </li>
        </ul>
      </aside>
      <!-- menuList -->
      <ul class="menuList">
        <router-link v-for="data in menuList" :key="data.id" tag="li" to="/login">
          <van-icon :name="data.icon.before " size="20" class="icon-css" />
          {{data.name}}
          <span>
            <van-icon :name="data.icon.after" />
          </span>
        </router-link>
      </ul>
      <!-- login-out -->
      <aside class="login-out">
        <van-button round size="large" type="info" color="red" @click="handleOut">退出登录</van-button>
      </aside>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon, Button, Dialog } from "vant";
Vue.use(Icon);
Vue.use(Button);
Vue.use(Dialog);

export default {
  // 路由守卫
  //   beforeRouteEnter(to, from, next) {
  //     if (localStorage.getItem("token")) {
  //       next();
  //     } else {
  //       next("/login");
  //     }
  //   }
  data() {
    return {
      menuList: [
        {
          id: 1,
          name: "电影票优惠券",
          icon: { before: "paid", after: "arrow" }
        },
        {
          id: 2,
          name: "商品优惠券",
          icon: { before: "idcard", after: "arrow" }
        },
        {
          id: 3,
          name: "我的活动",
          icon: { before: "volume-o", after: "arrow" }
        },
        {
          id: 4,
          name: "我的电影",
          icon: { before: "video-o", after: "arrow" }
        },
        { id: 5, name: "我的收藏", icon: { before: "like-o", after: "arrow" } },
        { id: 6, name: "意见反馈", icon: { after: "arrow" } },
        {
          id: 7,
          name: "商城使用帮助",
          icon: { after: "arrow" }
        },
        {
          id: 8,
          name: "购买使用帮助",
          icon: { after: "arrow" }
        }
      ]
    };
  },
  methods: {
    handleOut() {
      Dialog.confirm({
        title: "警告",
        message: "确定要退出吗"
      })
        .then(() => {
          // 确定退出
          window.sessionStorage.clear()
          this.$router.push("/login")
        })
        .catch(() => {
          // 取消退出
          console.log("out ...");
          
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.member {
  width: 100%;
  height: 100%;
  overflow: auto;
  .m-container {
    .user-msg {
      position: relative;
      height: 1.7rem;
      z-index: 2;
      background: url(//static1.mtime.cn/html5/20200116143308/images/2014/set_endlogin.jpg)
        no-repeat;
      background-size: cover;
      padding: 0 0.18rem 0 0.28rem;
      .table_v_c {
        width: 100%;
        // height: auto;
        padding-top: 0.42rem;
        display: flex;
        .i_block {
          display: inline-block;
          vertical-align: middle;
        }
        .i_set_face {
          border-radius: 1.2rem;
          overflow: hidden;
          width: 0.66rem;
          height: 0.66rem;
          background: url(//static1.mtime.cn/html5/20200116143308/images/2014/set_face.png)
            no-repeat;
          background-size: cover;
          .m_img {
            width: 100%;
            height: auto;
            display: block;
          }
        }
        dl {
          height: 100px;
          display: block;
          color: #fff;
          margin-left: 0.18rem;
          dt {
            margin: 0.07rem 0 0;
            .i_grade {
              display: inline-block;
              vertical-align: middle;
              overflow: hidden;
              font-size: 0.14rem;
              color: #fff;
              width: 0.3rem;
              height: 0.18rem;
              line-height: 0.18rem;
              text-align: center;
              background: url(//static1.mtime.cn/html5/20200116143308/images/2014/vip_grade.png)
                no-repeat 0 0;
              background-size: auto 0.18rem;
              font-style: normal;
            }
            > b {
              font-size: 0.18rem;
              display: inline-block;
              vertical-align: middle;
              font-weight: normal;
            }
          }
          dd {
            padding-top: 0.02rem;
            display: block;
            > b {
              font-size: 0.14rem;
            }
          }
        }
      }
    }
    .my_shoptool {
      width: 100%;
      // height: 400px;
      padding: 0 0.2rem 0;
      // background: yellowgreen;
      position: relative;
      box-sizing: border-box;
      // margin-bottom: 6px;
      ul {
        display: flex;
        justify-content: center;
        li {
          flex: 1;
          text-align: center;
          a {
            display: block;
            padding: 0.18rem 0 0.14rem;
            .i_cat {
              background: #ffb059
                url(//static1.mtime.cn/html5/20200116143308/images/2014/i_cate.png)
                no-repeat center center;
              background-size: auto 0.54rem;
              width: 0.54rem;
              height: 0.54rem;
              border-radius: 0.6rem;
              display: inline-block;
              vertical-align: middle;
              overflow: hidden;
              p {
                font-size: 0.14rem;
              }
            }
            .i_movie {
              background: #78bdfd
                url(//static1.mtime.cn/html5/20200116143308/images/2014/i_movie.png)
                no-repeat center center;
              background-size: auto 0.28rem;
              width: 0.54rem;
              height: 0.54rem;
              border-radius: 0.6rem;
              display: inline-block;
              vertical-align: middle;
              overflow: hidden;
              p {
                font-size: 0.14rem;
              }
            }
            .i_shop {
              background: #ff815a
                url(//static1.mtime.cn/html5/20200116143308/images/2014/i_shop.png)
                no-repeat center center;
              background-size: auto 28px;
              width: 0.54rem;
              height: 0.54rem;
              border-radius: 0.6rem;
              display: inline-block;
              vertical-align: middle;
              overflow: hidden;
              p {
                font-size: 0.14rem;
              }
            }
            p {
              padding: 0.1rem 0;
              font-size: 0.14rem;
              color: #777;
            }
          }
        }
      }
    }

    .menuList {
      background: #fff;
      padding: 0 0 0 16px;
      box-shadow: 1px 1px 4px rgba(51, 51, 51, 0.1);
      margin-bottom: 20px;
      li {
        padding: 12px 14px 12px 0;
        position: relative;
        font-size: 18px;
        line-height: 1.5;
        vertical-align: middle;
        border-top: 1px solid rgb(49, 42, 42, 0.1);
        .icon-css {
          vertical-align: middle;
        }
        span {
          position: absolute;
          right: 14px;
        }
      }
    }
    .login-out {
      padding: 20px 0;
    }
  }
}
</style>
