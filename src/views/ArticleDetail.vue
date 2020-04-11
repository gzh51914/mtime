<template>
    <div>
        <h1>{{pages}}</h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            titleUrl: [],
            pages: null
        }
    },
    created () {
        axios.post(`/utility/share.api?type=116&relateId=${this.$route.params.id}`).then(res => {
            var str = res.data.data.mtime.desc
            this.pages = 'h' + str.split('h')[1]
        })
    }
}
</script>

<style lang='scss' scoped>
    h1 {
        font-size: .18rem;
        margin-left: .2rem;
    }
</style>