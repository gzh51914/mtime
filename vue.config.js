module.exports = {
  devServer: {
    open: true, // 默认开启浏览器
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/info': {
        target: 'https://m.mtime.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/info': ''
        }
      },
      '/article': {
        target: 'https://content-api-m.mtime.cn',
        changeOrigin: true
      },
      '/utility': {
        target: 'https://comm-api-m.mtime.cn',
        changeOrigin: true
      },
      '/req': {
        target: 'http://47.104.227.24:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/req': ''// 路径的覆盖的写法 将/api 转为"" 猫眼后端识别不了/api
        }
      }
    }
  },
  lintOnSave: true, // 直接关闭eslint检查
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        con: '@/components',
        views: '@/views'
      }
    }
  }
}
