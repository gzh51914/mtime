<template>
    <div class="Coming">
        <MovieTab></MovieTab>
        <MovieSearch></MovieSearch>
        <MoseMovie></MoseMovie>
        <p></p>
        <ComingMovie></ComingMovie>
    </div>
</template>
<script>
import MovieTab from '@/components/MovieTab'
import MovieSearch from '@/components/MovieSearch'
import MoseMovie from '@/components/MoseMovie'
import ComingMovie from '@/components/ComingMovie'
import { mapMutations } from "vuex"
export default {
    components: {
        MovieTab,
        MovieSearch,
        MoseMovie,
        ComingMovie,
    },
    methods: {
        ...mapMutations("tabbar",["TabbarShow","TabbarHide"]),
    },
    mounted() {
        this.TabbarHide()
    },
    destroyed() {
        this.TabbarShow()
    },
}
</script>
<style lang="scss" scoped>
    p{
        height: .15rem;
        background: #f6f6f6;
        border-top: 2px solid rgba(51,51,51,0.05);
    }
</style>