<template>
    <div class="comingmovie">
        <h2><b>即将上映</b><span v-if="movieList.length">({{movieList.length}}部)</span></h2>
        <router-link v-for="mon in monthmovies"
        :key="mon[0].rMonth"
        :to='{
            name:"movie",
        }'
        tag="div"
        class="monthmovie" >
            <p class="month">{{mon[0].rMonth}}月</p>
            <ul>
                <router-link 
                v-for="movie in mon"
                :key="movie.id"
                :to='{
                    name:"movie",
                    params:{id:movie.id}
                }'
                tag="li">
                    <span class="day">{{movie.rDay}}日</span>
                    <div class="cmovie">
                        <div class="cmoviepic"><img :src="movie.image" alt=""></div>
                        <div class="cmovieword">
                            <b class="title">{{movie.title}}</b>
                            <p class="p1"><b class="color">{{movie.wantedCount}}</b>人想看 - {{movie.type}}</p>
                            <p class="p2" v-if="movie.director">导演：{{movie.director}}</p>
                            <span class="inbtn" v-if="movie.videos.length">预告片</span>
                        </div>
                    </div>
                </router-link>
            </ul>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState} from "vuex"
export default {
    created(){
        axios.get(`/info/Service/callback.mi/Movie/MovieComingNew.api?locationId=${this.cityId}&t=202041010111151599`).then(res=>{
            // console.log(res.data.moviecomings);
            //把电影数据赋值给 movieList
            this.movieList = res.data.moviecomings;

            //将所有电影的月份提取出来
            this.movieList.forEach(item => {
                if(!this.months.includes(item.rMonth)){
                    this.months.push(item.rMonth)
                }
            })

            //遍历月份，用monthmovie方法把不同月份的电影分类
            this.months.forEach(item => {
                this.monthmovies.push(this.monthmovie(item));
            })
            
        })
    },
    data(){
        return {
            months : [],
            movieList : [],
            monthmovies : []
        }
    },
    methods:{
        monthmovie : function (mon){
            return this.movieList.filter(function(item){
                return item.rMonth === mon 
            })
        }
    },
    computed: {
        ...mapState("city", ["cityName","cityId"]),
    },
}
</script>

<style lang="scss" scoped>
    *{
        font-size: .17rem;
    }
    li{
        list-style-type: none;
    }
    .comingmovie{
        padding: .14rem .17rem .17rem .17rem;
        h2{
            b{
                color: #333;
                font-size: .21rem;
            }
            span{
                color: #999;
                font-size: .21rem;
            }
            
        }
        .monthmovie{
            .month{
                padding: .14rem 0;
                font-size: .16rem;
                border-bottom: 1px solid #bbb;
            }
            ul{
                
                li{
                    margin-left: .35rem;
                    position: relative;
                    padding: .17rem 0;
                    border-bottom: 1px solid #d8d8d8;
                    .day{
                        position: absolute;
                        left: -0.35rem;
                        font-size: .14rem;
                        color: #999;
                    }
                    .cmovie{
                        display: flex;
                        .cmoviepic{
                            width: .74rem;
                            height: 1.12rem;
                            margin-right: .17rem;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .cmovieword{
                            flex: 1;
                            .title{
                                color: #333;
                            }
                            p{
                                font-size:  .14rem;
                                line-height: 1.65;
                            }
                            .p1{
                                .color{
                                    font-size:  .14rem;
                                    color: #ff8600;
                                }
                            }
                            .inbtn{
                                border: 1px solid #659c0d;
                                color: #659c0d;
                                padding: .03rem  .15rem;
                                text-decoration: none;
                                border-radius: 30px;
                                margin-top: .1rem;
                                display: inline-block;
                            }
                        }
                    }
                }
            }
        }
    }
</style>