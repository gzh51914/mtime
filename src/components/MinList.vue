<template>
    <div class="minlist">
        <article class="indexhot">
            <h2><a @click="toHot"><b v-if="movieList.length">正在上映({{movieList.length}}部)</b><i class="iconfont icon-youjiantou2"></i></a></h2>
            <ul class="clearfix">
                <router-link
                    v-for="movie in movieList"
                    :key="movie.id"
                    tag="li"
                    :to="'/movie/'+movie.id"
                >
                        <div class="moviepic">
                            <img :src="movie.img" alt="">
                        </div>
                        <p>
                            <span>{{movie.t}}</span>
                        </p>
                </router-link>
            </ul>
        </article>
        <article class="indexcoming">
            <h2><a @click="toComing"><b v-if="comingmovie.length">即将上映({{comingmovie.length}}部)</b><i class="iconfont icon-youjiantou2"></i></a></h2>
        </article>
    </div>
</template>

<script>
import axios from 'axios'
import MovieSearch from '@/components/MovieSearch'

export default {
    components: {
        MovieSearch
    },
    data () {
        return {
            movieList : [],
            comingmovie : []
        }
    },
    created(){
        axios.get("/info/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2020491025827205").then(res=>{
            this.movieList = res.data.ms;
        })
        axios.get("/info/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=202041010111151599").then(res=>{
            this.comingmovie = res.data.moviecomings;
        })
    },
    methods: {
        toHot:function () {
            this.$router.push('/home/hot')
        },
        toComing:function () {
            this.$router.push('/home/coming')
        }
    }
}
</script>

<style lang="scss" scoped>
    *{
        font-size: .17rem;
        text-decoration: none;
    }
    .clearfix:after {
        content: "";
        display: block;
        overflow: hidden;
        visibility: hidden;
        height: 0;
        clear: both
    }
    .minlist{
        .indexhot{
            padding: .05rem .17rem .17rem;
            h2{
                height: .42rem;
                a{
                    line-height: 2;
                    text-decoration: none;
                    display: block;
                    width: 100%;
                    b{
                        font-size: .21rem;
                        color: #333;
                    }
                    i{
                        float: right;
                        font-size: .22rem;
                    }
                }
            }
            ul{

                li{
                    list-style-type: none;
                    float: left;
                    .moviepic{
                        width: .76rem;
                        height: 1.13rem;
                        margin: 0 auto;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    p{
                        width: .82rem;
                        text-align: center;
    
                        span{
                            font-size: .16rem;
                            color: #333;
                            
                        }
                    }
                }
            }
        }
        .indexcoming{
            padding: .05rem .17rem .17rem;
            border-top: 1px solid #d8d8d8;
            h2{
                height: .42rem;
                a{
                    line-height: 2;
                    text-decoration: none;
                    display: block;
                    width: 100%;
                    b{
                        font-size: .21rem;
                        color: #333;
                    }
                    i{
                        float: right;
                        font-size: .22rem;
                    }
                }
            }
        }
    }
</style>