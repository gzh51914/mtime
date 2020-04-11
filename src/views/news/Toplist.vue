<template>
    <div class="content">
        <div v-if="topList" class="first">
            <img :src="topList.imageUrl" alt="">
            <h2>{{topList.title}}</h2>
        </div>
        <ol>
            <li>
                <img src="../../assets/top/top01.png" alt="">
                <span>时光Top100</span>
            </li>
            <li>
                <img src="../../assets/top/top02.png" alt="">
                <span>华语Top100</span>
            </li>
            <li>
                <img src="../../assets/top/top03.png" alt="">
                <span>全球票房榜</span>
            </li>
        </ol>
        <ul>
            <li
            v-for="topinfo in topLists"
            :key="topinfo.id"
            >
                <h2>{{topinfo.topListNameCn}}</h2>
                <p>{{topinfo.summary}}</p>
                <span class="iconfont icon-youjiantou2"></span>
            </li>
        </ul>
        <p @click="more">查看更多</p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            topList: null,
            topLists: [],
            pageIndex:1
        }
    },
    created () {
        this.topList = JSON.parse(localStorage.getItem('newsinfo')).topList
        axios.get('/info/Service/callback.mi/TopList/TopListOfAll.api?t=20204101832964920&pageIndex=1').then(res => {
            this.topLists = res.data.topLists
        })
    },
    methods: {
        more:function() {
            this.pageIndex += 1
            axios.get(`/info/Service/callback.mi/TopList/TopListOfAll.api?t=20204101832964920&pageIndex=${this.pageIndex}`).then(res => {
                this.topLists.push(...res.data.topLists)
            })
        }
    }
}
</script>

<style lang='scss' scoped>
    .content {
        .first {
            height: 2.10rem;
            position: relative;
            overflow: hidden;
            img {
                width: 100%;
            }
            h2 {
                width: 100%;
                height: .46rem;
                line-height: .46rem;
                font-size: .18rem;
                color: #FFFFFF;
                position: absolute;
                text-align: center;
                bottom: 0;
                background: rgba(0,0,0,0.2);
            }
        }
        ol {
            list-style: none;
            display: flex;
            padding-top: .3rem;
            li {
                flex: 1;
                display: flex;
                flex-direction: column;
                margin-bottom: .3rem;
                img {
                    width: .5742rem;
                    height: .5742rem;
                    margin: auto;
                }
                span {
                    font-size: .14rem;
                    text-align: center;
                    padding-top: .16rem;
                    &:nth-child(1){
                        color: #1498c9;
                    }
                    &:nth-child(2){
                        color: #3bc7c2;
                    }
                    &:nth-child(3){
                        color: #ffc12d;
                    }
                }
            }
        }
        ul {
            list-style: none;
            padding-left: .19rem;
            li {
                height: .5rem;
                padding: .2rem 0;
                border-top: 1px solid #d8d8d8;
                position: relative;
                h2 {
                    font-size: .17rem;
                    color: #333333;
                    font-weight: bolder;
                }
                p {
                    width: 3.2rem;
                    font-size: .15rem;
                    color: #777777;
                    margin-top: 0.06rem;
                    display:-webkit-box;
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:1;
                    overflow:hidden;
                    text-overflow:ellipsis;
                }
                span {
                    position: absolute;
                    right: .1rem;
                    top: 50%;
                    margin-top: -0.08rem;
                    .iconfont {
                        font-size: .2rem;
                    }
                }
            }
        }
        > p {
            text-align: center;
            color: #1e7dd7;
            height: .16rem;
            margin: .13rem 0;
            font-size: .16rem;
            padding-top: .1rem;
        }
    }
</style>