import axios from "axios"

//这个instance是针对于时光网的接口
const instance = axios.create({
    baseURL: '/info', //基本的url
});

const instance2 = axios.create({
    baseURL: '/theater', //基本的url
});


export {instance,instance2}