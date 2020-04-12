<template>
    <div class="mdt">
        <div class="topthree">
            <a class="iconfont icon-jt-left back" @click="back"></a>
            <div class="twoshare">
                <a href="" class="iconfont icon-shoucang sc"></a>
                <a href="" class="iconfont icon-fenxiangfuzhi fx"></a>
            </div>
        </div>
        <article class="movietop">
            <div class="pic">
                <img :src="movie.image" alt="">
            </div>
            <div class="word">
                <b>{{movie.titleCn}}</b>
                <p class="en">{{movie.titleEn}}</p>
                <p class="time">{{movie.runTime}}</p>
                <p class="type"><span v-for="ty in movie.type" :key="ty">{{ty}}</span></p>
                <p class="con" >{{country}}</p>
                <p class="btn"><span>我想看</span><span class="sbtn">我要评分</span></p>
            </div>
        </article>
        <p class="stitle">{{movie.commonSpecial}}</p>
        <p class="blank"></p>
        <article class="story">
            <p :class="{ two: istwo }">{{movie.content}}</p>
            <a class="iconfont " :class="{ 'icon-xiajiantou': istwo,'icon-to-up': !istwo }" @click="showall"></a>
        </article>
    </div> 
</template>

<script>
import axios from "axios"
export default {
    props:[
        "id"
    ],
    data (){
        return {
            movie: "",
            istwo: true,
            country : ""
        }
    },
    methods: {
        back(){
            this.$router.go(-1);
        },
        showall(){
            this.istwo = !this.istwo;
        }
    },
    created(){
        axios.get(`/info/Service/callback.mi/movie/Detail.api?movieId=${this.id}`).then(res=>{
            this.movie = res.data;
            this.country = this.movie.release.location;
            
            // console.log(res.data);
            
        })
        
        
    }
    
}
</script>

<style lang="scss" scoped>
    a{
        text-decoration: none;
    }
    .mdt{
        .topthree{
            width: 100%;
            height: .51rem;
            
            .back{
                font-size: .47rem;
                position: absolute;
                left: 0;
                z-index: 3;
                color: #eee;
            }
            .twoshare{
                z-index: 3;
                height: .51rem;
                a{
                    color: #eee;
                    font-size: .35rem;
                    display: inline-block;
                    position: absolute;
                    top: 7px;
                    
                }
                .sc{
                    right: .55rem;
                }
                .fx{
                    right: .05rem;
                }
            }
        }
        .movietop{
            margin-left: .17rem;
            display: flex;
            .pic{
                width: 1.23rem;
                height: 1.82rem;
                border: 2px solid #fff;
                margin-right: .11rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .word{
                flex: 1;
                position: relative;
                b{
                    font-size: .21rem;
                    color: #fff;
                    position: absolute;
                    top: .05rem;
                }
                p{
                    font-size: .14rem;
                    position: absolute;
                    font-weight: bolder;
                    color: #333;
                }
                .en{
                    color: #fff;
                    top: .38rem;
                }
                .time{

                    top: .8rem;
                }
                .type{
                    top: 1.04rem;
                }
                .con{
                    top: 1.3rem;
                }
                .btn{
                    top: 1.6rem;
                    span{
                        font-size: .16rem;
                        padding: .06rem .2rem;
                        border: 1px solid #777;
                        border-radius: 20px;
                        margin: 0 2px;
                        font-weight: normal;
                        color: #777
                    }
                    .sbtn{
                        color: #659c0d;
                        border-color: #659c0d;
                    }
                }
            }
        }
        .stitle{
            height: .16rem;
            padding: .1rem;
            text-align: center;
            color: #fd8900;
            font-size: .16rem;
        }
        .blank{
            height: .15rem;
            background: #f6f6f6;
            border-top: 2px solid rgba(51,51,51,0.05);
        }
        .story{
            p{
                color: #333;
                font-size: .16rem;
                padding: .12rem .17rem 0;
                
            }
            .two{
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            a{
                display: block;
                height: .33rem;
                width: 100%;
                text-align: center;
                text-decoration: none;
                font-size: .3rem;
            }
        }
    }
</style>