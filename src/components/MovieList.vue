<template>
    <ul>
        <li v-for='movie in movieList'
        :key='movie.movieId'
        @click="toDetail(movie.movieId)"
        >   <div class="movie">
                <div class="moviepic">
                    <img :src="movie.img" alt="">
                </div>
                <div class="moviewords">
                    <b class="title">{{movie.t}}</b>
                    <p class="p1"><i class="dot">“</i><span class="Sectitle">{{movie.commonSpecial}}</span></p>
                    <p class="p2"><i class="cine_01">IMAX</i><i class="cine_01">中国巨幕</i></p>
                    <p class="p3"><span class="con">1家影院上映1场</span><a href="" class="detailbtn">查影讯</a></p>
                </div> 
            </div>
        </li>
    </ul>
</template>

<script>
import axios from 'axios'
import {mapState, mapMutations} from "vuex"
export default {
    data () {
        return {
            movieList : []
        }
    },
    methods:{
        toDetail(id){
            this.$router.push(`/movie/${id}`)
        },
        ...mapMutations('tabbar',['TabbarShow','TabbarHide'])
    },
    created(){
        axios.get(`/Service/callback.mi/Showtime/LocationMovies.api?locationId=${this.cityId}&t=2020491025827205`).then(res=>{
            this.movieList = res.data.ms;
        })
    },
    computed: {
        ...mapState("city", ["cityName","cityId"]),
    },
    mounted () {
        this.TabbarHide()
    },
    destroyed () {
        this.TabbarShow()
    }
}
</script>

<style lang="scss" scoped>
    *{
        font-size: .17rem;
    }
    i{
        font-style: normal;
    }
    ul{
        padding-left: .17rem;
        box-sizing: border-box;
        li{
            padding: .17rem 0 .1rem 0;
            box-sizing: border-box;
            // height: 1.47rem;
            height: auto;
            border-bottom: 1px solid #d8d8d8;
            list-style-type: none;
            .movie{
                display: flex;

                .moviepic{
                    width:.76rem;
                    height: 1.14rem;
                    margin-right: .17rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .moviewords{
                    flex: 1;
                    .title{
                        font-size: .17rem;
                        font-family: "微软雅黑";
                    }
                    .p1{
                        .dot{
                            font-family: "宋体";
                            font-size: .2rem;
                            color: #659d0e;
                        }
                        .Sectitle{
                            font-size: .15rem;
                            color: #659d0e;
                        }
                    }
                    .p2{
                        margin: .05rem 0;
                        .cine_01{
                            padding: 0 .05rem;
                            color: #659d0e;
                            border-radius: 0.03rem;
                            border: 1px solid #659d0e;
                            margin-right: .03rem;
                            font-size: .1rem;
                        }
                    }
                    .p3{
                        .con{
                            display: inline-block;
                            font-size: .14rem;
                            color: #999;
                            height: .4rem;
                            line-height: .4rem;
                        }
                        .detailbtn{
                            text-decoration: none;
                            color: #659d0e;
                            font-size: .16rem;
                            border: 1px solid #659d0e;
                            border-radius: .2rem;
                            padding: .07rem .2rem;
                            float: right;
                            margin-right: .17rem;
                        }
                    }
                }
            }
        }
    }
</style>