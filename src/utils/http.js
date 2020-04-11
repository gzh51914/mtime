import axios from "axios"

//这个instance是针对于时光网的接口
const instance = axios.create({
    baseURL: '/info', //基本的url
});

const instance2 = axios.create({
    baseURL: '/theater', //基本的url
});

// 请求之前的拦截操作 看token是否存在
instance2.interceptors.request.use(config => {
    if (sessionStorage.getItem('token')) {
      config.headers.token = sessionStorage.getItem('token')
    }
    return config
  })
  
  // 响应之后的拦截操作 通过状态码判断
  instance2.interceptors.response.use(res => {
    if (res.status === 200) {
      return res
    } else {
      console.log('reject', res)
      return Promise.reject(res.data.msg)
    }
  })

export { instance, instance2 }
