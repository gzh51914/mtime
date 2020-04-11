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
      "/news": {
        target: "https://content-api-m.mtime.cn",
        changeOrigin: true
      },
      "/utility": {
        target: "https://comm-api-m.mtime.cn",
        changeOrigin: true
      },
      "/discovery": {
        target: "https://ticket-api-m.mtime.cn",
        changeOrigin: true
      },
      "/theater": {
        target: "https://ticket-m.mtime.cn",
        changeOrigin: true,
        pathRewrite: {
          "^/theater": ""
        }
      },
      "/toDetail": {
        target: "https://ticket-api-m.mtime.cn",
        changeOrigin: true,
        pathRewrite: {
          "^/toDetail": ""
        }
      },
      "/api": {
        target: "https://ticket-m.mtime.cn",
        changeOrigin: true
      },
      '/req': {
        target: 'http://47.104.227.24:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/req': ''
        }
      },
      "/tDetail": { // 影院详情页的url
        target: "https://ticket-api-m.mtime.cn",
        changeOrigin: true,
        pathRewrite: {
          "^/tDetail": ""
        }
      },
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
