<template>
  <div id="app">
    <!-- <Tabbar></Tabbar> -->
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
import Footer from './components/Footer'

export default {
  components: {
    Tabbar,
    Footer
  }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    // font-size: .15rem;
}

</style>
