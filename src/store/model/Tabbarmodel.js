const module = {
    namespaced: true,//开启命名空间
    state: {
        isTabbarShow:true,
      },
      mutations:{
        show(state){
            state.isTabbarShow = true
        },
        hide(state){
            state.isTabbarShow = false
        },
      },
}
export default module