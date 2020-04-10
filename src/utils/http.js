import axios from 'axios'

// 这个instance是针对于时光网的接口
const instance = axios.create({
  baseURL: '/info' // 基本的url
})

// 针对于上线的 http://47.96.0.211:3000
const instance2 = axios.create({
  baseURL: '/ask'
})

// 请求之前的拦截操作 看token是否存在
instance2.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.token = localStorage.getItem('token')
    }
    return config
  }
)

// 响应之后的拦截操作 通过状态码判断
instance2.interceptors.response.use(res => {
  if (res.data.err === 0) {
    return res.data
  } else {
    return Promise.reject(res.data.msg)
  }
})

export { instance, instance2 }
