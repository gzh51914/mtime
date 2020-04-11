<template>
    <div>
        <router-view/>
        <MovieSearch v-show="this.path==='/home'"></MovieSearch>
        <MinList v-show="this.path==='/home'"></MinList>
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
  },
  data () {
      return {
          path: null
      }
  }
}
</script>

<style lang='scss' scoped>
    h1 {
        font-size: .15rem;
    }
</style>
