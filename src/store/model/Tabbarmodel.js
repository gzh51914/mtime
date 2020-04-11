const module = {
    namespaced: true,//开启命名空间
    state: {
        isTabbarShow:true,
      },
      mutations:{
        TabbarShow(state){
            state.isTabbarShow = true
        },
        TabbarHide(state){
            state.isTabbarShow = false
        },
      },
}
export default module