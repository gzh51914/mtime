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
      <aside class="login-out">
        <van-button round size="large" type="info" color="red" @click="handleOut">退出登录</van-button>
      </aside>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon, Button, Dialog } from 'vant'
Vue.use(Icon)
Vue.use(Button)
Vue.use(Dialog)

export default {
  // 路由守卫
  //   beforeRouteEnter(to, from, next) {
  //     if (localStorage.getItem("token")) {
  //       next();
  //     } else {
  //       next("/login");
  //     }
  //   }
  data () {
    return {
      menuList: [
        {
          id: 1,
          name: '电影票优惠券',
          icon: { before: 'paid', after: 'arrow' }
        },
        {
          id: 2,
          name: '商品优惠券',
          icon: { before: 'idcard', after: 'arrow' }
        },
        {
          id: 3,
          name: '我的活动',
          icon: { before: 'volume-o', after: 'arrow' }
        },
        {
          id: 4,
          name: '我的电影',
          icon: { before: 'video-o', after: 'arrow' }
        },
        { id: 5, name: '我的收藏', icon: { before: 'like-o', after: 'arrow' } },
        { id: 6, name: '意见反馈', icon: { after: 'arrow' } },
        {
          id: 7,
          name: '商城使用帮助',
          icon: { after: 'arrow' }
        },
        {
          id: 8,
          name: '购买使用帮助',
          icon: { after: 'arrow' }
        }
      ]
    }
  },
  methods: {
    handleOut () {
      Dialog.confirm({
        title: '警告',
        message: '确定要退出吗'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.member {
    background-color: pink;
    width: 100%;
    height: 100%;
    overflow: auto;
  .m-container {
    .user-msg {
      position: relative;
      height: 170px;
      z-index: 2;
      // margin-top: -52px;
      background: url(//static1.mtime.cn/html5/20200116143308/images/2014/set_endlogin.jpg)
        no-repeat;
      background-size: cover;
      padding: 0 18px 0 28px;
      .table_v_c {
        width: 100%;
        // height: auto;
        padding-top: 42px;
        display: flex;

        .i_block {
          display: inline-block;
          vertical-align: middle;
        }
        .i_set_face {
          border-radius: 120px;
          overflow: hidden;
          width: 66px;
          height: 66px;
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
          margin-left: 18px;
          //   box-sizing: border-box;
          dt {
            margin: 7px 0 0;
            .i_grade {
              display: inline-block;
              vertical-align: middle;
              overflow: hidden;
              font-size: 14px;
              color: #fff;
              width: 30px;
              height: 18px;
              line-height: 18px;
              text-align: center;
              background: url(//static1.mtime.cn/html5/20200116143308/images/2014/vip_grade.png)
                no-repeat 0 0;
              background-size: auto 18px;
              font-style: normal;
            }
            > b {
              font-size: 18px;
              display: inline-block;
              vertical-align: middle;
              font-weight: normal;
            }
          }
          dd {
            display: block;
            > b {
              font-size: 14px;
            }
          }
        }
      }
    }
    .my_shoptool {
      padding: 0 20px 0;
      background: #fff;
      position: relative;
      // margin-bottom: 6px;
      ul {
        display: flex;
        justify-content: center;
        li {
          flex: 1;
          text-align: center;
          a {
            .i_cate {
              background: #ffb059
                url(//static1.mtime.cn/html5/20200116143308/images/2014/i_cate.png)
                no-repeat center center;
              background-size: auto 54px;
              width: 54px;
              height: 54px;
              border-radius: 60px;
              display: inline-block;
              vertical-align: middle;
              overflow: hidden;
            }
          }
        }
      }
    }

    .menuList {
      background: #fff;
      padding: 0 0 0 16px;
      box-shadow: 1px 1px 4px rgba(51, 51, 51, 0.1);
      margin-bottom: 20pxm;
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
      padding-bottom: 20px;
    }
  }
}
</style>
