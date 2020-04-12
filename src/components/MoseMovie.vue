<template>
    <div class="mosemovie">
        <h2><b>最受关注</b><span v-if="movieList.length">({{movieList.length}}部)</span></h2>
        <div class="filmscroll">
            <ul>
                <router-link 
                v-for="movie in movieList"
                :key="movie.id"
                :to='{
                    name:"movie",
                    params:{id:movie.id}
                }'
                tag="li"
                >
                <span class="time">{{movie.rMonth}}月{{movie.rDay}}日</span>
                    <div class="movielist">
                        <div class="upmoviepic">
                            <img :src="movie.image" alt="">
                        </div>
                        <div class="upmovieword">
                            <b class="title">{{movie.title}}</b>
                            <p class="p1"><b class="color">{{movie.wantedCount}}</b>人想看 - {{movie.type}}</p>
                            <p class="p2">导演：{{movie.director}}</p>
                            <p class="p3">演员：{{movie.actor1}},{{movie.actor2}}</p>
                            <span class="inbtn">预告片</span>
                        </div>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState} from "vuex"
export default {
    created(){
        axios.get(`/Service/callback.mi/Movie/MovieComingNew.api?locationId=${this.cityId}&t=202041010111151599`).then(res=>{
            // console.log(res.data.attention);
            this.movieList = res.data.attention;
        })
    },
    computed: {
        ...mapState("city", ["cityName","cityId"]),
    },
    data(){
        return {
            movieList : []
        }
    }
}
</script>

<style lang="scss" scoped>
    *{
        font-size: .17rem;
    }
    li{
        list-style-type: none;
    }
    .mosemovie{
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
        .filmscroll{
            padding-top: .24rem;
            ul{
                li{
                    border-top: 1px solid #bbb;
                    border-right: 1px solid #bbb;
                    position: relative;
                    .time{
                        position: absolute;
                        background: #fff;
                        top: -0.12rem;
                        left: 0;
                        padding: 0 0.05rem;
                        font-size: .16rem;
                        color: #777;
                    }
                    .movielist{
                        display: flex;
                        padding-top: .17rem;
                        box-sizing: border-box;
                        .upmoviepic{
                            width: .99rem;
                            height: 1.49rem;
                            margin-right: .17rem;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .upmovieword{
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
                                margin-top: .17rem;
                                display: inline-block;
                            }
                        }
                    }
                }
            }
        }
    }
</style>