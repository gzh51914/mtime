<template>
    <div class="content">
        <div class="top" v-if="reviewInfo">
            <div class="img">
                <img :src="reviewInfo.posterUrl" alt="">
            </div>
            <h2>
                <span>{{reviewInfo.movieName}}</span>
                <i>{{reviewInfo.title}}</i>
            </h2>
        </div>
        <ul>
            <li
            v-for="sum in commentCount"
            :key="sum.id"
            >
                <h2>{{sum.title}}</h2>
                <p>
                    <img :src="sum.userImage" alt="">
                    <b>{{sum.nickname}}-评分<strong>《{{sum.relatedObj.title}}》</strong></b>
                    <em v-if="sum.rating">{{sum.rating}}</em>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            reviewInfo: null,
            commentCount: null
        }
    },
    created () {
        axios.get('/info/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=20204101246412756').then(res => {
            this.reviewInfo = res.data.review
        })
        axios.get('/info//Service/callback.mi/MobileMovie/Review.api?needTop=false&t=20204102124561143').then(res => {
            this.commentCount = res.data
        })
    }
}
</script>

<style lang='scss' scoped>
    .content {
        .top {
            height: 1.6rem;
            position: relative;
            .img {
                width: .74rem;
                height: 1.11rem;
                position: absolute;
                bottom: .1rem;
                left: .2rem;
                z-index: 2;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            h2 {
                height: .74rem;
                width: 100%;
                background: rgba(0,0,0,0.5);
                position: absolute;
                bottom: 0;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                span {
                    font-size: .21rem;
                    color: white;
                    margin-left: 1.1rem;
                    margin-top: .1rem;
                }
                i {
                    font-size: .15rem;
                    color: #DDDDDD;
                    margin-left: 1.1rem;
                    font-style: normal;
                }
            }
        }
        ul {
            list-style: none;
            padding: .17rem;
            li {
                height: .69rem;
                border-bottom: 1px solid #d8d8d8;
                h2 {
                    font-size: .1875rem;
                    display:-webkit-box;
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:1;
                    overflow:hidden;
                    text-overflow:ellipsis;
                }
                p {
                    height: .25rem;
                    display: flex;
                    margin-top: 0.06rem;
                    img {
                        width: .2461rem;
                        height: .2461rem;
                        margin-right: 0.06rem;
                    }
                    b {
                        font-size: .15rem;
                        color: #777777;
                        display:-webkit-box;
                        -webkit-box-orient:vertical;
                        -webkit-line-clamp:1;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        strong {
                            font-weight: bolder;
                            color: #333333;
                        }
                    }
                    em {
                        display: block;
                        width: auto;
                        height: .21rem;
                        font-size: .13rem;
                        font-style: normal;
                        background-color: #659d0e;
                    }
                }
            }
        }
    }
</style>