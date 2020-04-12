import axios from "axios"

//这个instance是针对于时光网的接口
const instance = axios.create({
    baseURL: '/info', //基本的url
    // 
});

const instanceTheater = axios.create({
  baseURL: '/theater', //影院的url
});

const instanceTDetail = axios.create({
  baseURL: '/tDetail', //影院详情页的url
});

// instance2 是登录注册接口
const instance2 = axios.create({
  baseURL: '/req'
})

// 请求之前的拦截操作 看token是否存在
instance2.interceptors.request.use(config => {
  if (sessionStorage.getItem('token')) {
    config.headers.token = sessionStorage.getItem('token')
  }
  // console.log("这里是请求之前拦截...",config);
  return config
})

// 响应之后的拦截操作 通过状态码判断
instance2.interceptors.response.use(res => {
  // console.log('这里是响应之后拦截...')
  if (res.data.err === 0) {
    // console.log("登录成功...",res)
    return res
  } else {
    // console.log('reject', res)
    return Promise.reject(res.data.msg)
  }
})

export { instance, instance2 , instanceTheater, instanceTDetail}
