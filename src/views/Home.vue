<template>
    <div>
        <router-view/>
        <MovieSearch v-show="this.path==='/home'"></MovieSearch>
        <MinList v-show="this.path==='/home'"></MinList>
        <div class="poster">
            <img src="../assets/get.jpeg" alt="">
        </div>
        <Article v-show="this.path==='/home'"></Article>
    </div>
</template>

<script>
import Article from '@/components/Article'
import MovieSearch from '@/components/MovieSearch'
import MinList from '@/components/MinList'

export default {
  components: {
    Article,
    MovieSearch,
    MinList
  },
  created () {
    // console.log(this.$route.path);
    this.path = this.$route.path
    // axios.get('/poster/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F31%2F143906.61810640.jpg&width=640&height=320&clipType=4').then(res => {
    //     console.log(res);
    //     this.posterUrl = res
    // })
  },
  data () {
      return {
          path: null
      }
  }
}
</script>

<style lang='scss' scoped>
    .poster {
        width: 100%;
        height: 1.875rem;
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>
