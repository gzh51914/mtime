<template>
    <div v-html="content">
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            content: null
        }
    },
    created () {
        console.log(this.$route.params.id);
        axios.get(`/news/detail.api?newsId=${this.$route.params.id}&t=20204111365668077`).then(res => {
            console.log(res.data.data.content);
            this.content = res.data.data.content
        })
    }
}
</script>

<style lang='scss' scoped>
    h1 {
        font-size: .18rem;
    }
</style>