import axios from "axios"

//这个instance是针对于时光网的接口
const instance = axios.create({
    baseURL: '/info', //基本的url
});

const instance2 = axios.create({
  baseURL: '/req'
})

// 请求之前的拦截操作 看token是否存在
instance2.interceptors.request.use(config => {
  if (sessionStorage.getItem('token')) {
    config.headers.token = sessionStorage.getItem('token')
  }
  // console.log("这里是请求之前拦截...");

  return config
})

// 响应之后的拦截操作 通过状态码判断
instance2.interceptors.response.use(res => {
  // console.log('这里是响应之后拦截...')
  // console.log(res)

  if (res.status === 200) {
    // console.log("登录成功...")

    return res
  } else {
    console.log('reject', res)
    return Promise.reject(res.data.msg)
  }
})

export { instance, instance2 }
