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
