<template>
    <div class="content">
        <h3>今日热点</h3>
        <ul>
            <!-- <router-link
            v-for='info in infolist'
            :key='info.relatedId'
            :to="{
                name: 'articledetail',
                params: {id:info.relatedId}
            }"
            tag='li'
            :class="selectclass(info.styleType)"
            > -->
            <li
            v-for='info in infolist'
            :key='info.relatedId'
            :class="selectclass(info.styleType)"
            @click="toDetail(info.relatedId)"
            >
                <span>
                    <img v-for='imginfo in info.images' :key='imginfo.imgUrl' :src="imginfo.imgUrl" alt="">
                </span>
                <div>
                    <h4>{{info.title}}</h4>
                    <p>{{info.publishTime | dataFilter}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import Vue from "vue"
import moment from "moment"

Vue.filter('dataFilter',data => {
    return moment(data*1000).format('YYYY-MM-DD HH:mm')
})
export default {
    data () {
        return {
            infolist: null,
            imginfo: null
        }
    },
    created () {
        axios.post('/article/originalInfoList.api').then(res => {
            this.infolist = res.data.data.list
            // console.log(res.data.data.list[0].images[0].imgUrl);
        })
    },
    methods: {
        selectclass:function(data){
            if(data === 1) return 'typeone'
            else if(data === 2) return 'typesecond'
            else return 'typethird'
        },
        toDetail:function(id){
            this.$router.push(`/articledetail/${id}`)
        }
    }
}
</script>

<style lang='scss' scoped>
    .content {
        width: 3.40rem;
        padding-top: 0.06rem;
        margin: auto;
        h3 {
            font-size: .20rem;
            height: .42rem;
            line-height: .42rem;
        }
        ul {
            list-style: none;
            margin: auto;
            .typeone {
                display: flex;
                justify-content: space-between;
                padding-bottom: .16rem;
                padding-top: .16rem;
                border-bottom: 1px solid #d8d8d8;
                span {
                    display: block;
                    width: 1.32rem;
                    height: .92rem;
                    margin-right: .12rem;
                    position: relative;
                    img {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                    }
                }
                div {

                    h4 {
                        font-size: .18rem;
                        width: 1.86rem;
                        height: .4rem;
                    }
                    p {
                        font-size: .13rem;
                        width: 1.86rem;
                        height: .22rem;
                        margin-top: .2rem;
                    } 
                }
            }
            .typesecond {
                display: flex;
                flex-direction: column;
                padding-bottom: .16rem;
                padding-top: .16rem;
                border-bottom: 1px solid #d8d8d8;
                span {
                    width: 3.40rem;
                    height: 1.66rem;
                    margin-right: .12rem;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                div {
                    h4 {
                        font-size: .18rem;
                        width: 3.40rem;
                        height: .2rem;
                        line-height: .2rem;
                        padding: .2rem 0;
                    }
                    p {
                        font-size: .13rem;
                        width: 1.86rem;
                        height: .22rem;
                        // margin-top: .2rem;
                    } 
                }
            }
            .typethird {
                display: flex;
                flex-direction: column;
                padding-bottom: .16rem;
                padding-top: .16rem;
                border-bottom: 1px solid #d8d8d8;
                span {
                    display: flex;
                    width: 100%;
                    height: .75rem;
                    justify-content: space-between;
                    img {
                        width: 1.09rem;
                        height: .75rem;
                    }
                }
                div {
                    h4 {
                        font-size: .18rem;
                        width: 3.40rem;
                        height: .2rem;
                        line-height: .2rem;
                        padding: .2rem 0;
                    }
                    p {
                        font-size: .13rem;
                        width: 1.86rem;
                        height: .22rem;
                        // margin-top: .2rem;
                    } 
                }
            }
        }
    }
</style>