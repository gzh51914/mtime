<template>
    <h1>{{pages}}</h1>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  data () {
    return {
      titleUrl: [],
      pages: null
    }
  }
}
</script>

<style lang='scss' scoped>
    h1 {
        font-size: .18rem;
    }
</style>
