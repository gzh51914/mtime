<template>
  <div id="app">
    <!-- <Tabbar></Tabbar> -->
    <router-view/>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
export default {
  components: {
    Tabbar
  }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    font-size: .15rem;
}

</style>
