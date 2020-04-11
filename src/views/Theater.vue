<template>
  <div class="theater">
      <div class="h_theater">
          <ul>
              <li>
                  <em @click="handleChangepage('/citylist')">{{cityName}}</em>
                  <i></i>
              </li>
              <li>
                  <input type="text" placeholder="筛选影院" v-model="inputText">
                  <p v-show="inputText" @click="handelText"></p>
              </li>
          </ul>
      </div>
      
        <van-dropdown-menu active-color="#f97d3f" >
            <van-dropdown-item title="离我最近" />
            <van-dropdown-item title="全城"/>
            <van-dropdown-item title="影厅特效" />
        </van-dropdown-menu>
      <div class="notice">{{noticeNotOwn}}</div>
      <!-- 列表 -->
      <ul class="cityTheater" v-if="searchCinema.length">
          <li
            v-for="data in searchCinema"
            :key="data.cinemaId"
            @click="handleClick (data)"
          >
            <p>{{data.cinameName}}</p>
            <div>{{data.address}}</div>
          </li>
      </ul>
      <div class="noTheater" v-else>
          <i></i>
          <p>抱歉，没有满足条件的影院</p>
      </div>
      <topButton></topButton>
  </div>
</template>

<script>
import Vue from 'vue'
import {instanceTheater} from "@/utils/http"
import {mapState,mapActions,mapMutations} from "vuex"
import "@/stylesheets/common.scss"
import topButton from "@/components/Topbutton"
import { DropdownMenu, DropdownItem,TreeSelect } from 'vant';

Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(TreeSelect);

export default {
    components:{
        topButton
    },
    data() {
        return {
            inputText:"",
            noticeNotOwn:"",
            cinemaList:[],
            isTreeShow:false,
        }
    },
    created() {
        instanceTheater.get(`/api/proxy/ticket/onlineCinemasByCity.api?locationId=${this.cityId}&_=1586499843760`).then(res=>{
            // console.log(res.data.data);
            this.noticeNotOwn = res.data.data.noticeNotOwn
            this.cinemaList = res.data.data.cinemaList
        })
    },
    methods: {
        ...mapMutations("cinema", ["setCinemaName","setCinemaId"]),
        
        handelText(){
            this.inputText=""
        },
        handleClick (item) {
            // 修改vuex的共享状态 城市数据
            // console.log(item);
            this.setCinemaName(item.cinameName)
            this.setCinemaId(item.cinemaId)
            this.$router.push('/theater/detail/'+ item.cinemaId)
        },
        handleChangepage(path){
            this.$router.push(path)
        },
    },
    computed: {
        ...mapState("city", ["cityName","cityId"]),
        searchCinema () {
            return this.cinemaList.filter(item => item.cinameName.includes(this.inputText) ||
                    item.cinameName.toUpperCase().includes(this.inputText.toUpperCase()) ||
                    item.cinameName.toLowerCase().includes(this.inputText.toLowerCase())
            )
        }
    },
}
</script>

<style lang="scss" scoped>
    .theater{
        position: relative;
        .h_theater{
            height: 41px;
            background: #f6f6f6;
            padding: 9px 17.5px;
            border-bottom: 1px solid #d8d8d8;
            ul{
                display: flex;
                li{
                    height: 40px;
                    
                    em{
                        font-weight: 400;
                        font-size: 15px;
                        font-style: normal;
                        display: inline-block;
                        vertical-align: middle;
                        line-height: 40px;
                    }
                    i{
                        line-height: 40px;
                        display: inline-block;
                        vertical-align: middle;
                        width: 10px;
                        height: 6px;
                        margin: 2px 0 0 5px;
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAeCAYAAABqpJ3BAAAAAXNSR0IArs4c6QAAAWVJREFUWAntmDFugzAUhoEhOQAH4DwwJQszx+hWdQo3YM3Mkg3Ow9aFA7RT35+SKHEwPNsPjKpaMsHPvOfvQ0KKHdZ1vev7/iMIgoI62jmO4/c8z79/h9u46jjDqqpOhPimYLZJkhyzLPtS4l6GTdPsu6670OKpAlBGFCiUIIYpEpA4MrdqaAIeHAUEdM27xAz8lRsCZ50Bxb1JcODBHuGDpZt2SxJM+BbsIcC5CWt82KYsV4GtSJjCg/su4FvCBv5FwJeELfyowNoSLvBagbUkXOEnBZaWkICfFVhKQgqeJSAtIQnPFpCSkIY3EnCVWALeWMBWYil4KwFTCTyv2Yxg6tasN1BPfyVu1Ti/3Lc61FJ3Uo9LWMOjiLUAkpkSeFTXnOBR1EkABRwknOFFBCwlRODFBAwlxOBFBZgSovDiAjMS4vBYb+pYBfPGDYdhtNk+UGJJ/XPoJWJbOSgzlvpP+Mtv4AfFZn0enf+H0QAAAABJRU5ErkJggg==) 0 0 no-repeat transparent;
                        background-size: cover;
                    }
                    input{
                        display: block;
                        margin-top: 2px;
                        font-size: 16px;
                        width: 160px;
                        height: 28px;
                        padding: 3px 26px 2px 35px;
                        border: 1px solid #bbb;
                        border-radius: 6px;
                        background: url(https://static1.mtime.cn/html5/20200116143308/images/2014/search_ico_01.png) no-repeat 6px center;
                        background-color: #fff;
                        background-size: 20px 20px;
                        z-index: 0;
                        outline: none;
                    }
                    p{
                        width: 22px;
                        height: 22px;
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAIAAAC1JZyVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4MzI3MWU0ZC1jYjk5LTQ3YzgtOWJhZS01OGRjN2Q1NmE4OGMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDg1QjNGRjE1RDk1MTFFNDlENUNCQzhERjVDNkMxRkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDg1QjNGRjA1RDk1MTFFNDlENUNCQzhERjVDNkMxRkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDAyNTY0RDc0Nzk1MTFFNDkyMjNEMEY0Njg0NkNFMjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDAyNTY0RDg0Nzk1MTFFNDkyMjNEMEY0Njg0NkNFMjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5iem+SAAADZElEQVR42ryXSU9qQRCFvY1DwAmjBElMnBIjCxIwyu9nbURMNEZdPHVnHKJBwIADflgvTdl9m8vbvN7Qt4dzqqprIur3+xMjx/v7+8PDw8vLS7vd7nQ6n5+fLKZSqUwmMzs7m81mc7nc1NTUaJAoRMN6s9m8vr5+fHycSBorKyubm5sLCwtRFP0Dzdvb29XVFUoMTkTRaI3tAdTa2dlJp9Nj0dzd3V1cXGCcRHv6fBhzd3d3dXXV2Zp0vv/8DEfMMTk4/PHxcXZ2xhNubW3pXRPikOexEIk0/Z8hJx2cXzTYigfX6HZuVwTI11I+9TpQALo0vDnv4Zy20g1PGyNSM9GK2k9NDCCwQxqW8CvMqg29trZ2cHAwMzOjF7++vmTORAiYwEHc7O/vc0UzAQisSDygIT7u7+8dWfAWQq9cLk9PT2uLOd4h3rW3t7e4uFgoFBydgAX8L83NzY02jsCdnp6+vr7Oz89XKhXL5A+20GNubg7vOjk5cYzMJ+ADml6vR5zrbZl3u91GoyFMCBvLxCJbZB3y0NHREVayxrRQgENhJJfE+i7bMLVaLYT1mYRD9ICD1CdmsO9nYaEwz8/PvgdrpuPjY5/JcrBVr9fhcIyhAaEw6BuK6hCT5mCLA6OjGIqoVqtpWYQfH3WsrKH59DlCFwcJbXLSSP3wY9A5qnWK5bBe7ofqILYm/sswBJdP7mctbbSQ7/meZs1j/Crk6+68eazvhazNILAM9TyU2GM5ej8jlilUnKAwS0tL2hcdWUK+G2KKBYHCUMBjlRAOElrIrzSTk/ecnEJDYnBqfvxEQAngMgmNtOZzaCabYaVqOFCogQQGwo2NDd8FSqWScJDWYjl03hMmrvguIOADd6JUOKbjKCWWFpDcrnOJU60tE8c4zBWHA1iat2EDRZY9PDy0BVRQfNF0NfPbAX2FCSW1Wq3izcNegA/6K0dSH0si149B/woTAG1QDmOQqry9ve24o72stXGqdewVel0A7fqvnMaetHFaidFNYWwnBYhIHOw6YSJoz8/PydxC4Cf2EYPwKBaL+Xw+obkFkUO4x+XlpdRvyVTjcBB/tOry5smtuvUZfPT29vbp6SnxH8Hy8vL6+rrkrdjsmdyMS+tDPafW0kWK02McvAjzAg2Hjf+Qeb8FGACrvvJCjodX4gAAAABJRU5ErkJggg==) 50% no-repeat transparent;
                        background-size: 22px 22px;
                        cursor: pointer;
                        position: absolute;
                        right: 6px;
                        top: 8px;
                        z-index: 2;
                    }
                    span{
                        margin-top: 2px;
                        color: #333;
                        width: 70px;
                        display: block;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        border: 1px solid #fff;
                        border-radius: 5px;
                        margin-left: 8px;
                    }
                    &:nth-child(1){
                        margin-right: 42px;
                    }
                    &:nth-child(2){
                        position: relative;
                    }
                }
            }
        }
        .notice{
            line-height: 28px;
            background: rgb(246, 246, 246);
            font-size: 12px;
            color: rgb(153, 153, 153);
            text-align: center;
        }
        .cityTheater{
            li{
                margin-left: 10px;
                padding: 15px 15px 15px 0;
                border-bottom: 1px solid #d8d8d8;
                p{
                    width:220px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size: 16px;
                    line-height: 1.2;
                    color: #333;
                }
                div{
                    font: 14px/100% Arial,微软雅黑,microsoft yahei,Verdana,Lucida,sans-serif;
                    color: #777;
                    padding-right: 4px;
                    line-height: 18px;
                    font-weight: 400;
                    margin-top: 7px;
                }
            }
        }
        .noTheater{
            height: 352px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction:column;
            i{
                display: block;
                width: 120px;
                height: 120px;
                background: url(//static1.mtime.cn/frontend.ticket.ticket-h5/1.0.83/script/assets/404_cinema_3x_dfae29bd.png) 0 0 no-repeat transparent;
                background-color: #fff;
                background-position: 50%;
                background-size: contain;
            }
            p{
                font-size: 15px;
                line-height: 20px;
                color: #999;
                font-weight: 100;
            }
        }
        
    }
</style>