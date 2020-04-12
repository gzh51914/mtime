<template>
    <div class="hot">
        <header>
            <MovieTab></MovieTab>
            <MovieSearch></MovieSearch>
        </header>
        <MovieList></MovieList> 
        
        <!-- <Footer></Footer> -->
    </div>
</template>
<script>
import MovieTab from '@/components/MovieTab'
import MovieSearch from '@/components/MovieSearch'
import MovieList from '@/components/MovieList'
// import Footer from '@/components/Footer'
import { mapMutations } from "vuex"
export default {
    components: {
        MovieTab,
        MovieSearch,
        MovieList,
        // Footer,
    },
    methods: {
        ...mapMutations("tabbar",["TabbarShow","TabbarHide"]),
    },
    mounted(){
        this.TabbarHide()
        this.$nextTick().then(()=>{
            let str1 = document.querySelector('.hot');
            let str2 = document.querySelector('Footer');
            str1.style.minHeight = (document.documentElement.clientHeight - str2.offsetHeight) + 'px';
        })
    },
    destroyed() {
        this.TabbarShow()
    },
    
}
</script>

<style lang="scss" scoped>
</style>