<template>
    <div class="Hot">
        <MovieTab></MovieTab>
        <MovieSearch></MovieSearch>
        <MovieList></MovieList>
    </div>
</template>
<script>
import MovieTab from '@/components/MovieTab'
import MovieSearch from '@/components/MovieSearch'
import MovieList from '@/components/MovieList'
export default {
    components: {
        MovieTab,
        MovieSearch,
        MovieList
    }
}
</script>

<style>

</style>