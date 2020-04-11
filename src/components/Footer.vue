<template>
    <footer>
        <ul>
            <router-link
            v-for='foo in foodata'
            :key='foo.id'
            :to='foo.path'
            tag='li'
            active-class='active'
            >
            {{foo.title}}
            </router-link>
        </ul>
        <ol>
            <router-link
            v-for='info in infodata'
            :key='info.id'
            :to='info.path'
            tag='li'
            >
                {{info.title}}<span></span>
            </router-link>
        </ol>
        <p class="p1">
            <img src="https://static1.mtime.cn/html5/20200116143308/images/2014/fot_logo.png" alt="">
            <a href="https://feature.mtime.cn/mobile/2018/licence/licence.html" class="honest">营业执照</a>
        </p>
        <p class="p2">
            <span>Copyright</span>
            <span class="copytime">2006-2020</span>
            <span> Mtime.com Inc. All rights reserved.</span>
        </p>
    </footer>
</template>

<script>
export default {
  data () {
    return {
      foodata: [
        { id: 1, title: '首页', path: '/home' },
        { id: 2, title: '购票', path: '/theater' },
        { id: 3, title: '发现', path: '/news' },
        { id: 4, title: '我的', path: '/member' }
      ],
      infodata: [
        { id: 1, title: 'PC版', path: '/home' },
        { id: 2, title: '客户端下载', path: '/theater' },
        { id: 3, title: '意见反馈', path: '/news' },
        { id: 4, title: '帮助中心', path: '/member' }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
    footer {
        background-color: #f6f6f6;
        padding-bottom: .2rem;
        ul {
            list-style: none;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            color: #0074c5;
            font-size: .18rem;
            border-top: 1px solid #f6f6f6;
            width: 100%;
            height: .5rem;
            background-color: #ffffff;
        }
        ol {
            list-style: none;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            font-size: .15rem;
            height: .52rem;
            text-align: center;
            li {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                span {
                    display: block;
                    width: 1px;
                    height: .14rem;
                    background-color: #d8d8d8;
                    position: absolute;
                    right: 0;
                }
                &:nth-child(4){
                    span {
                        width: 0;
                    }
                }
            }
        }
        .p1 {
            height: .34rem;
            font-size: .13rem;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: .70rem;
                height: .24rem;
            }
            a {
                width: .76rem;
                height: .28rem;
                text-align: center;
                line-height: .28rem;
                text-decoration: none;
                background-color: #b6c1cd;
                color: #fff;
                margin-left: 0.05rem;
            }
        }
        .p2 {
            font-size: .13rem;
            color: #cdcdcd;
            text-align: center;
        }
    }
</style>
