<template>
  <section class="theater_detail">
      <div class="td_header">
          <i @click="handleChangepage('/movie/'+movieInfoRegion.movieId)"></i>
          <em></em>
      </div>
      <div class="filmtitle">
          <ul>
              <li><h2>{{filmname}}</h2></li>
          </ul>
      </div>
      <div class="hotmovie" v-if="moviesList">
          <div class="scrollpic">
              <cSwiper cName="swipe" bindchange="">
                <div 
                    class="swiper-slide movieListRegion"
                    v-for="(item,index) in moviesList"
                    :key="item.movieId"
                    v-swiper="{
                        current:index,
                        length:moviesList.length,
                        swipe:'swipe',
                        free:{
                            slidesPerView: 3,
                            spaceBetween: 20,
                            centeredSlides: true,
                            slideToClickedSlide: true,
                        }
                    }"
                    @click="handlePic(item)"
                >
                    <img :src="item.img" alt="" >
                    <p class="numbox ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
					    {{item.title}}
				    </p>
                    <span>{{item.ratingFinal}}</span>
                </div>
            </cSwiper>
          </div>
          <div class="select_movie" @click="handleChangepage('/')">
           <h3>{{movieInfoRegion.title}}</h3>
           <p>{{movieInfoRegion.length}} - {{movieInfoRegion.type}}</p>
           <i></i>
          </div>
          <div class="search_tab">
              <van-tabs v-model="active"
                color="#1e7dd7"
                background="#f6f6f6"
                title-active-color="#1e7dd7"
              >
                <van-tab
                    v-for="times in movieInfoRegion.showDates"
                    :key="times"
                    :title="times.substring(5).replace('-','月')+'日'"
                >
                    <ul class="tick">
                        <li
                            v-for="data in movieTime[0].list"
                            :key="data.sId"
                        >
                            <h3>{{data.hall}}</h3>
                            <p>{{data.versionDesc}} / {{data.language}}</p>
                            <b>￥</b>
                        </li>
                    </ul>
                </van-tab>
              </van-tabs>
          </div>
      </div>
  </section>
</template>

<script>
import {instanceTDetail} from "@/utils/http"
import { mapMutations } from "vuex"
import "@/stylesheets/common.scss"
import Vue from "vue"
import Swiper from "swiper"
import cSwiper from "@/components/Swiper"
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
//封装的自定义指令 v-swiper
Vue.directive("swiper",{
    inserted(el,binding,vnode){
        //代表最后一个元素插入完毕了，再进进行一次实例化操作就可以了
        if(binding.value.current === binding.value.length-1){
            new Swiper("."+binding.value.swipe,{ //默认swiper执行3次，因为插入了3个swiper-slide的真实dom
                ...binding.value.free,
                pagination:{
                    el:".swiper-pagination",
                    clickable: true,
                },
            })
        }
    }
})

export default {
    components:{
        cSwiper  //注册组件Swiper
    },
    props:['id'],
    data() {
        return {
            filmname:"",
            moviesList:null,
            movieInfoRegion:[],
            active:1,
            movieTick:[],
            movieTime:[],
        }
    },
    created() {
        // console.log(this.$route.params.id);
        instanceTDetail.get('/cinema/showtime.api?t=20204119394183946&cinemaId='+this.$route.params.id).then(res=>{
            // console.log(res.data.data);
            this.filmname=res.data.data.cinema.name
            this.moviesList=res.data.data.movies
            this.movieInfoRegion=res.data.data.movies[0]
            this.movieTick=res.data.data.showtimes
            this.movieTime=res.data.data.showtimes
            
        })
    },
    methods: {
        ...mapMutations("tabbar",["TabbarShow","TabbarHide"]),
        ...mapMutations("footer",["FooterShow","FooterHide"]),
        handlePic(item){
            this.movieInfoRegion = item;
            this.movieTime=(this.movieTick.filter(itm=>itm.movieId===item.movieId))
        },
        handleChangepage(path){
            this.$router.push(path)
        },
    },
    mounted() {
        this.TabbarHide()
        this.FooterHide()
        
    },
    destroyed() {
        this.FooterShow()
        this.TabbarShow()
    },
}
</script>

<style lang="scss" scoped>
    .theater_detail{
        .td_header{
            height: 52px;
            background: #1c2635;
            padding: 0 18px 0 16px;
            display: flex;
            justify-content:space-between;
            i{
                width: 52px;
                height: 52px;
                display: block;
                background: url(//static1.mtime.cn/html5/20200116143308/images/2014/h_btn_back.png) no-repeat left center;
                background-size: 12px 20px;
            }
            em{
                width: 63px;
                height: 52px;
                background: url(//static1.mtime.cn/html5/20200116143308/images/2014/i_h_share.png) no-repeat right center;
                background-size: 28px 27px;
            }
        }
        .filmtitle{
            padding: 18px 6px 13px 18px;
            ul{
                li{
                    h2{
                        color:#333;
                        font-size: 18px;
                    }
                }
            }
        }
        .hotmovie{
            // overflow: hidden;
            .scrollpic{
                background: #828282;
                height: 180px;
                padding-top: 18px;
                .swipe {
                    .swiper-wrapper{
                        width: 660px !important;
                        .movieListRegion{
                            position: relative;
                            img{
                                width: 90px;
                                height: 124px;
                            }
                            p{
                                color: #fff;
                                font-size: 14px;
                                line-height: 1.2;
                                margin-top: 6px;
                                text-align: center;
                                width: 90px;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                            }
                            span{
                                position: absolute;
                                top: 3px;
                                right: 23px;
                                background: #659d0e;
                                width: 24px;
                                height: 20px;
                                font-size: 12px;
                                color: #fff;
                                overflow: hidden;
                                line-height: 20px;
                                text-align: center;
                            }
                            &::after{
                                content: '';
                                display: block;
                                width: 90px;
                                height: 124px;
                                position: absolute;
                                left: 0;
                                top: 0;
                                bottom: 0;
                                right: 0;
                                background: rgba(0,0,0,0.4);
                                z-index: 2;
                            }
                        }
                        .swiper-slide-active{
                            img{
                                border: 1px solid #ddd;
                            }
                            p{
                                display: none;
                            }
                            &::after{
                                background: transparent;
                            }
                            
                        }
                    }
                }  
            }
            .select_movie{
                padding: 15px 18px 15px 0;
                text-align: center;
                border-bottom: 1px solid #d8d8d8;
                font-family: "helvetica neue","微软雅黑";
                position: relative;
                h3{
                    font-size: 18px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                p{
                    margin-top: 6px;
                    font-size: 15px;
                    color: #777;
                }
                i{
                    display: block;
                    background: #fff url(//static1.mtime.cn/html5/20200116143308/images/2014/i-tmore.png) no-repeat center center;
                    background-size: 16px 9px;
                    transform: rotate(-90deg);
                    width: 16px;
                    height: 9px;
                    position: absolute;
                    right: 15px;
                    top: 40px;
                }
            }   
            .search_tab{
                .tick{
                    li{
                        display: flex;
                        text-align: center;
                        border-bottom: 1px solid #d8d8d8;
                        height: 44px;
                        line-height: 44px;
                        padding: 15px 0 15px 0;
                        margin-left: 18px;
                        h3{
                            width: 117px;
                            font-size: 20px;
                            color: #333;
                        }
                        p{
                            color: #333;
                            font-size: 16px;
                            width: 150px;
                        }
                        b{
                            color: #777;
                            font-size: 18px;
                            width: 90px;
                        }
                    }
                }
            }
        }
        
    }
</style>