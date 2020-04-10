<template>
    <nav>
        <ul>
            <li><img src="https://static1.mtime.cn/html5/20200116143308/images/2014/logo_mtime.png" alt=""></li>
            <router-link v-for='nav in navdata'
            :key='nav.id'
            :to='nav.path'
            tag='li'
            active-class='active'
            >
                <span>{{nav.title}}</span>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            navdata: [
                { id: 1, title: '首页', path: '/home' },
                { id: 2, title: '购票', path: '/theater' },
                { id: 3, title: '发现', path: '/news' },
                { id: 4, title: '我的', path: '/member' }
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
    ul {
        width: 3.75rem;
        height: .51rem;
        background-color: #333;
        color: #BBBBBB;
        font-size: .15rem;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        li {
            img {
                width: .66rem;
                height: .21rem;
            }
        }
    }
    .active {
        color: #FFFFFF;
        font-weight: 600;
    }
</style>