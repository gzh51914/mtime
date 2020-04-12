<template>
    <div class="hot">
        <header>
            <MovieTab></MovieTab>
            <MovieSearch></MovieSearch>
        </header>
        <main>
           <MovieList></MovieList> 
        </main>
        
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
    mounted(){
        let str1 = document.querySelector('main');
        let str2 = document.querySelector('Footer');
        let str3 = document.querySelector('header');
        
        if(str2.offsetTop < document.documentElement.clientHeight - str2.offsetHeight){
            str1.style.height =  (document.documentElement.clientHeight - str2.offsetHeight - str3.offsetHeight) +'px'
        }
        
    }
    
}
</script>

<style lang="scss" scoped>

</style>