<template>
    <div class="hot">
        <MovieTab></MovieTab>
        <MovieSearch></MovieSearch>
        <MovieList></MovieList>
        <Footer></Footer>
    </div>
</template>
<script>
import MovieTab from '@/components/MovieTab'
import MovieSearch from '@/components/MovieSearch'
import MovieList from '@/components/MovieList'
import Footer from '@/components/Footer'
import { mapMutations } from 'vuex'

export default {
    components: {
        MovieTab,
        MovieSearch,
        MovieList,
        Footer,
    },
    methods: {
        ...mapMutations('tabbar',['TabbarShow','TabbarHide']),
    },
    mounted () {
        this.TabbarHide()
    },
    destroyed () {
        this.TabbarShow()
    }
}
</script>

<style lang="scss" scoped>
    Footer{
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>