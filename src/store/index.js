import Vue from 'vue'
import Vuex from 'vuex'
import tabbar from "./model/Tabbarmodel" // 引入
import city from "./model/Citylistmodel"
import footer from "./model/Footermodel"
import cinema from "./model/Theaterlistmodel"
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

let store = new Vuex.Store({
  //实现了对于vuex的持久化存储 => localStorage
  plugins: [createPersistedState({
    reducer(data){
      return {
        // data,
        city:data.city,  //这样的话持久化字段就只有city字段了。
        cinema:data.cinema,
      }
    }
  })],
  modules: {
    tabbar,//tabbar的模块
    city,
    footer,
    cinema,
  }
})

export default store
