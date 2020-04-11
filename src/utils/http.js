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

export {instance,instanceTheater,instanceTDetail}