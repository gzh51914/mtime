module.exports = {
  devServer: {
    proxy: {
      "/info": {
        target: "https://m.mtime.cn",
        changeOrigin: true,
        pathRewrite: {
          "^/info": ""
        }
      },
      "/theater": { // 影院的url
        target: "https://ticket-m.mtime.cn",
        changeOrigin: true,
        pathRewrite: {
          "^/theater": ""
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
  lintOnSave: true, //直接关闭eslint检查
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'con': '@/components',
        'views': '@/views',
      }
    }
  }
}
