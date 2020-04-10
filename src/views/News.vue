<template>
    <div>
        <ul>
            <router-link v-for='news in newsdata'
            :key='news.id'
            :to='news.path'
            tag='li'
            active-class='active'
            >
                <span>{{news.title}}</span>
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data () {
        return {
            newsdata: [
                { id: 1, title: '新闻', path: '/news/newslist' },
                { id: 2, title: '预告片', path: '/news/trailer' },
                { id: 3, title: '排行榜', path: '/news/toplist' },
                { id: 4, title: '影评', path: '/news/review' }
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
    ul {
        font-size: .16rem;
        display: flex;
        align-items: center;
        list-style: none;
        height: .46rem;
        li {
            flex: 1;
            text-align: center;
        }
    }
    .active {
        color: #1e7dd7;
        font-weight: bold;
    }
</style>