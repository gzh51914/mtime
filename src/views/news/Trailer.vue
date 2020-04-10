<template>
    <div class="content">
        <div v-if="firstInfo" class="first">
            <img :src="firstInfo.coverImg" alt="">
            <h2>{{firstInfo.movieName}}</h2>
        </div>
        <ul>
            <li 
            v-for="trailer in trailerList"
            :key="trailer.movieId"
            >
                <div class="img">
                    <img :src="trailer.coverImg" alt="">
                </div>
                <p>{{trailer.movieName}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    created () {
        axios.get('/discovery/trailerList.api?t=202041017421571967&param=1').then(res => {
            this.firstInfo = res.data.data.trailers[0]
            this.trailerList = res.data.data.trailers
            this.trailerList.shift(0)
        })
    },
    data () {
        return {
            trailerList: [],
            firstInfo: []
        }
    }
}
</script>

<style lang='scss' scoped>
    .content { 
        .first {
            height: 2.10rem;
            position: relative;
            img {
                width: 100%;
                height: 100%;
            }
            h2 {
                width: 100%;
                height: .46rem;
                line-height: .46rem;
                font-size: .18rem;
                color: #FFFFFF;
                position: absolute;
                text-align: center;
                bottom: 0;
                background: rgba(0,0,0,0.5);
            }
        }   
        ul {
            padding-left: .17rem;
            list-style: none;
            li {
                padding: .16rem 0;
                height: .91rem;
                border-bottom: 1px solid #d8d8d8;
                display: flex;
                .img {
                    width: 1.46rem;
                    height: .88rem;
                    position: relative;
                    img {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                    }
                }
                p {
                    font-size: .18rem;
                    padding: 0 .1758rem;
                    width: 2.1rem;
                }
            }
        }
    }
</style>