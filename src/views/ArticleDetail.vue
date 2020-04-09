<template>
    <h1>{{pages}}</h1>
</template>

<script>
import axios from 'axios'
export default {
    props:['id'],
    data () {
        return {
            titleUrl: [],
            pages: null
        }
    },
    created () {
        // console.log(this.$route.params.id)
        this.pages = '这是' + this.$route.params.id + '的详情页'
        // id = this.$route.params.id
        // axios.post(`/utility/share.api?type=116&relateId=${this.$route.params.id}`).then(res => {
        //     // console.log(res.data.data.mtime.desc)
        //     var str = res.data.data.mtime.desc
        //     this.titleUrl = 'h' + str.split("h")[1]
        //     // console.log(this.titleUrl)
        // })
    }
}
</script>

<style lang='scss' scoped>
    h1 {
        font-size: .18rem;
    }
</style>
