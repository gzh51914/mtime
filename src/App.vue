<template>
  <div id="app">
    <Tabbar v-show="isTabbarShow"></Tabbar>
    <router-view/>
    <Footer v-show="isFooterShow"></Footer>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
import Footer from './components/Footer'
import {mapState} from "vuex"
export default {
  components: {
    Tabbar,
    Footer,
  },
  computed:{
    ...mapState("tabbar",["isTabbarShow"]),
    ...mapState("footer",["isFooterShow"]),
  },
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

</style>
