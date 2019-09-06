// const path = require('path')
// const webpack = require('webpack')
// const httpType = 'http://'
const proxyUrl = 'http://localhost:9001' // 代理地址设置
module.exports = {
  //   assetsDir: 'static',
  // 构建时不进行eslint校验
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 生产环境禁止source map
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: proxyUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/api/': ''
        }
      }
    }
  }
}
