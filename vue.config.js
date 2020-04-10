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
      "/theater": {
        target: "https://ticket-m.mtime.cn",
        changeOrigin: true,
        pathRewrite: {
          "^/theater": ""
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
