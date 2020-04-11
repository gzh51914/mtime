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
export default {
    components: {
        MovieTab,
        MovieSearch,
        MovieList,
        Footer,
    },
    created () {
        // console.log(this.$route);
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