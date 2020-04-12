<template>
    <div>
        <Loading v-if="isLoading" />
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
import Vue from 'vue'
import Loading from '@/components/Loading'

Vue.component('Loading',Loading)

export default {
  components: {
    Article,
    MovieSearch,
    MinList
  },
  created () {
    this.path = this.$route.path
    console.log(document.documentElement.clientHeight);
  },
  data () {
      return {
          path: null,
          isLoading: true
      }
  },
  mounted () {
        setTimeout(()=>{
            this.isLoading = false
        },500)
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
