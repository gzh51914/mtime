<template>
  <div class="movie">
    <!-- 详情页电影id{{$route.params.id}} -->
    <div class="bg" :style="{backgroundImage: 'url('+movieimg+')'}" style="background-size: cover">
      <div class="bgbottom"></div>
      <div class="mask"></div>
    </div>
    <MovieDetailTop class="mdt" :id="$route.params.id"></MovieDetailTop>
  </div>
</template>

<script>
import MovieDetailTop from '@/components/movie/MovieDetailTop'
import axios from "axios"
import { mapMutations } from "vuex"

export default {
  components: {
    MovieDetailTop
  },
  data(){
    return {
      id : "",
      movieimg : null
    }
  },
  created () {
    this.id = this.$route.params.id;
    axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.id}`).then(res=>{
        this.movieimg = res.data.image;
    })
  },
  methods: {
      ...mapMutations("tabbar",["TabbarShow","TabbarHide"]),
  },
  mounted() {
      this.TabbarHide();
      this.$nextTick().then(()=>{     
          let str1 = document.querySelector('.movie');
          let str2 = document.querySelector('Footer');
          str1.style.minHeight = (document.documentElement.clientHeight - str2.offsetHeight) + 'px';
      })
  },
  destroyed() {
      this.TabbarShow()
  }
}
</script>

<style lang="scss" scoped>
  .movie{
    
    .bg{
      width: 100%;
      height:1.64rem;
      overflow: hidden;
      position: absolute;
      z-index: -2;
      .bgbottom{
        background: url("http://static1.mtime.cn/html5/20200116143308/images/2014/cinemainfo_bg.png") no-repeat;
        position: absolute;
        bottom: -1px;
        width: 100%;
        height: .6rem;
        background-size: cover;
      }
    }
    .mask{
      position: absolute;
      width: 100%;
      height:1.64rem;
      background: rgb(0, 0, 0);
      z-index: -1;
      opacity: 0.7;
    }
    
  }
</style>