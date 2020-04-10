<template>
    <div class="citylist">
        <div class="h_city">
            <i @click="handleChangepage"></i>
            <span>选择城市</span>
        </div>
        <aside>
            <div><input type="text" placeholder="请输入搜索关键词" v-model="mytext" :class="(mytext ? 'short' :'long')"><span v-show="mytext" @click="handleCancel">取消</span></div>
        </aside>
        <div class="condition">
            <ul>
                <li></li>
            </ul>
        </div>
        <div class="search" v-show="mytext">
            <ul v-if="searchDatalist.length">
                <li
                    v-for="data in searchDatalist"
                    :key="data.id"
                    @click="handleClick(data)" 
                >{{data.n}}</li>
            </ul>
            <div class="no-city" v-else>
                <p>当前无此城市</p>
            </div>
        </div>
        <article v-show="!mytext || !searchDatalist.length">
            <div class="lists">
                <p >热门城市：</p>
                <ul>
                    <li :key="index" v-for="(item,index) in hotCity" @click="handleClick(item)">{{item.n}}</li>
                </ul>
            </div>
            <div class="lists" v-for="(data,index) in dataList"
                    :key="index">
                <p :index="data.index">{{data.index}}</p>
                <ul>
                    <li :key="index" v-for="(item,index) in data.list" @click="handleClick(item)" >{{item.n}}</li>
                </ul>
            </div>
        </article>
        <topButton></topButton>
    </div>
</template>

<script>
import Vue from 'vue'
import {instance} from "@/utils/http"
import { mapMutations } from "vuex"
import topButton from "@/components/Topbutton"

import "@/stylesheets/common.scss"

export default {
    components:{
        topButton
    },
    data () {
        return {
            mytext:"",
            dataList:[],
            hotCity: [],
            indexList:[],
            searchList:[]
        }
    },
    created () {
        instance("/Service/callback.mi/Showtime/HotCitiesByCinema.api?t=202048225470270").then(res => {
            // console.log((res.data.p).slice(0,9))
            this.searchList = res.data.p
            this.dataFilter(res.data.p)
            this.hotCity = (res.data.p).slice(0,9)
        })
    }, 
    methods:{
        ...mapMutations("tabbar",["TabbarShow","TabbarHide"]),
        ...mapMutations("footer",["FooterShow","FooterHide"]),
        ...mapMutations("city", ["setCityName","setCityId"]),
        handleCancel(){
            this.mytext=""
        },
        handleChangepage(){
            this.$router.back()
        },
        handleClick (item) {
            // 修改vuex的共享状态 城市数据
            // console.log(item);
            this.setCityName(item.n)
            this.setCityId(item.id)
            this.$router.back()
        },
        dataFilter (cities) {
            const letterArr = []
            for (var i = 65; i < 91; i++) {
                letterArr.push(String.fromCharCode(i))
            }

            // filtr 遍历26个字母，跟cities数据.pinyin.首字母.大写 进行过滤
            var cityArr = []
            for (var j = 0; j < letterArr.length; j++) {
                const tempArr = cities.filter(item => item.pinyinFull.substring(0, 1) === letterArr[j])
                if (tempArr.length > 0) { // 如果cities里面pinyin里面有大写字母
                cityArr.push({
                    index:letterArr[j],
                    list:tempArr
                })
                this.indexList.push(letterArr[j])
                }
            }
            this.dataList = cityArr
        }
    },
    computed: {
        searchDatalist () {
            return this.searchList.filter(item => item.n.includes(this.mytext) ||
                    item.pinyinFull.toUpperCase().includes(this.mytext.toUpperCase()) ||
                    item.pinyinFull.toLowerCase().includes(this.mytext.toLowerCase())
            )
        }
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
    .citylist{
        .h_city{
            height: 52px;
            position: relative;
            z-index: 2;
            background: #1c2635;
            width: 100%;
            i{
                width: 52px;
                height: 52px;
                display: block;
                background: url(https://static1.mtime.cn/html5/20200116143308/images/2014/h_btn_back.png) no-repeat center;
                background-size: 12px 20px;
                position: absolute;
                z-index: 2;
                left: 0;
                top: 0;
            }
            span{
                height: 52px;
                line-height: 52px;
                display: block;
                font-size: 18px;
                color: #fff;
                text-align: center;
            }
        }
        aside{
            background: #f6f6f6;
            padding: 9px 18px;
            border-bottom: 1px solid #d8d8d8;
            div{
                width: 100%;
                display: flex;
                input{
                    border: 1px solid #bbb;
                    padding: 7px 29px 7px 32px;
                    height: 22px;
                    font-size: 16px;
                    line-height: 1.2;
                    border-radius: 6px;
                    background: #fff url(https://static1.mtime.cn/html5/20200116143308/images/2014/search_ico_01.png) no-repeat 6px center;
                    background-size: 20px 20px;
                    z-index: 0;
                    margin-left: 26px;
                    outline: none;
                }
                .long{
                    width: 73%;
                }
                .short{
                    width:56%;
                }
                span{
                    text-align: center;
                    border: 1px solid #fff;
                    border-radius: 5px;
                    margin-left: 6px;
                    width: 52px;
                    line-height: 32px;
                    height: 32px;
                    color: #777;
                    font-size: 18px;
                }
            }
        }
        .search{
            ul{
                li{
                    border-bottom: 1px solid #d8d8d8;
                    margin-left: 18px;
                    line-height: 38px;
                    font-size: 18px;
                    color: #333;
                }
            }
            .no-city{
                p{
                    font-size: 18px;
                    color: #777;
                    background: #ebebeb;
                    padding: 0 17px;
                    line-height: 36px;
                    height: 36px;
                    box-shadow: 0 1px 1px rgba(51,51,51,0.1) inset;
                }
            }
        }
        article{
            .lists{
                p{
                    font-size: 18px;
                    color: #777;
                    background: #ebebeb;
                    padding: 0 17px;
                    line-height: 36px;
                    height: 36px;
                    box-shadow: 0 1px 1px rgba(51,51,51,0.1) inset;
                }
                ul{
                    display: flex;
                    padding: 0 18px 18px;
                    flex-wrap: wrap;
                    li{
                        font-size: 18px;
                        width: 25%;
                        padding: 18px 0 0;
                        color: #333;
                    }
                }
            }
        }
    }
</style>