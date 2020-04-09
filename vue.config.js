module.exports = {
  devServer: {
    proxy: {
      "/Service": {
        target: "https://m.mtime.cn",
        changeOrigin: true,
        // pathRewrite: {
        //   "^/info": ""
        // }
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
