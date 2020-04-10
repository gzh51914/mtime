<template>
  <div id="app">
    <Tabbar v-show="isTabbarShow"></Tabbar>
    <router-view/>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
import {mapState} from "vuex"
export default {
  components: {
    Tabbar
  },
  computed:{
    ...mapState("tabbar",["isTabbarShow"])
  },
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    font-size: .15rem;
}

</style>
