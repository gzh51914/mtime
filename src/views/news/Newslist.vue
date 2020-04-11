<template>
    <div class="content">
        <div class="img">
            <img :src="imgUrl" alt="">
            <h2>{{imgTitle}}</h2>
        </div>
        <ul>
            <li
            v-for="news in newsList"
            :key="news.id"
            :class="news.type===1?'stylesecond':'styleone'"
            @click="toDetail(news.id)"
            >
                <h3>{{news.title}}</h3>
                <img class="single" v-if="!news.images.length" :src="news.image" alt="">
                <div v-if="news.images.length" class="arr">
                    <img v-for="info in news.images" :key="info.gId" :src="info.url1" alt="">
                </div>
                <p>
                    <span>{{news.publishTime | dataFilter}}</span>
                    <span>评论 {{news.commentCount}}</span>
                </p>
            </li>
        </ul>
        <p @click="more">查看更多</p>
    </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import moment from 'moment'

Vue.filter('dataFilter',data => {
    return moment(data*1000).format('YYYY-MM-DD HH:mm')
})

export default {
    data () {
        return {
            imgUrl: null,
            imgTitle: null,
            newsList: [],
            pageIndex: 1
        }
    },
    created () {
        axios.get('/info/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=20204101246412756').then(res => {
            localStorage.setItem('newsinfo', JSON.stringify(res.data))
            this.imgUrl = res.data.news.imageUrl
            this.imgTitle = res.data.news.title
        })
        axios.get('/info/Service/callback.mi/News/NewsList.api?t=20204101246448055&pageIndex=1').then(res => {
            this.newsList = res.data.newsList
        })
    },
    methods: {
        more:function () {
            this.pageIndex += 1
            axios({
                method: 'get',
                url: `/info/Service/callback.mi/News/NewsList.api?t=20204101718281039&pageIndex=${this.pageIndex}`
            }).then(res => {
                this.newsList.push(...res.data.newsList)
                
            }).catch(err => {
                console.log(err)
            })
        },
        toDetail:function(id){
            this.$router.push(`/newsdetail/${id}`)
        }
    }
}
</script>

<style lang='scss' scoped>
    .content{
        .img {
            height: 2.10rem;
            position: relative;
            img {
                width: 100%;
                height: 100%;
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
        ul {
            list-style: none;
            padding-left: .17rem;
            .styleone {
                padding: .16rem 0;
                height: .91rem;
                border-bottom: 1px solid #d8d8d8;
                .single {
                    float: left;
                    width: .88rem;
                    height: .88rem;
                }
                h3 {
                    float: right;
                    font-size: .17rem;
                    width: 2.34rem;
                    padding: 0 .17rem;
                }
                p {
                    font-size: .13rem;
                    float: right;
                    width: 2.34rem;
                    padding: 0 .17rem;
                    margin-top: .1rem;
                    span {
                        &:nth-child(1){
                            margin-right: .3rem;
                        }
                    }
                }
            }
            .stylesecond {
                padding: .16rem 0;
                height: 1.35rem;
                border-bottom: 1px solid #d8d8d8;
                .arr {
                    display: flex;
                    justify-content: space-between;
                    padding-right: .17rem;
                    padding-top: 0.06rem;
                    img {
                        width: 1.11rem;
                        height: .77rem;
                    }
                }
                h3 {
                    font-size: .17rem;
                }
                p {
                    font-size: .13rem;
                    padding-top: 0.08rem;
                    margin-top: .1rem;
                    span {
                        &:nth-child(1){
                            margin-right: .3rem;
                        }
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
        }
    }
</style>