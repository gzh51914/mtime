const module = {
    namespaced: true,//开启命名空间
    state: {
        isFooterShow:true,
      },
      mutations:{
        FooterShow(state){
            state.isFooterShow = true
        },
        FooterHide(state){
            state.isFooterShow = false
        },
      },
}
export default module