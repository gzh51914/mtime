import Vue from 'vue'
import Vuex from 'vuex'
import tabbar from "./model/Tabbarmodel" // 引入
import city from "./model/Citylistmodel"
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

let store = new Vuex.Store({
  //实现了对于vuex的持久化存储
  plugins: [createPersistedState({
    reducer(data){
      return {
        city:data.city  //这样的话持久化字段就只有city字段了。
      }
    }
  })],
  modules: {
    tabbar,//tabbar的模块
    city,
  }
})

export default store
