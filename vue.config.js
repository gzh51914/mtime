module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://m.mtime.cn",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
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
