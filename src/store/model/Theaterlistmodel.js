
const module = {
    namespaced: true, // 开启命名空间
    state:{
      cinemaName:"",
      cinemaId:""
    },
    mutations:{
      setCinemaName (state, name) {
        state.cinemaName = name
      },
      setCinemaId(state,cinemaId){
        state.cinemaId = cinemaId
      }
    }
  }
  
  export default module
  