const path = require('path');
// const webpack = require('webpack')
// const httpType = 'http://'
function resolve (dir) {
  return path.join(__dirname, dir);
}
// const FileListPlugin = require('./lzc');
// const proxyUrl = 'http://49.235.8.149:9001';
const proxyUrl = 'http://localhost:9001';
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  //   assetsDir: 'static',
  publicPath: '/',
  // 构建时不进行eslint校验
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 生产环境禁止source map
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: proxyUrl,
        changeOrigin: true
      }
    }
  },
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
    // config.plugins.push(new FileListPlugin());
    // config.plugins.push(
    //   new BundleAnalyzerPlugin({
    //     analyzerMode: 'server',
    //     generateStatsFile: true,
    //     statsOptions: { source: false }
    //   })
    // );
  },
  chainWebpack: config => {
    // config.plugins.delete('preload'); // TODO: need test
    // config.plugins.delete('prefetch'); // TODO: need test

    // // set svg-sprite-loader
    // config.module
    //   .rule('svg')
    //   .exclude.add(resolve('src/icons'))
    //   .end();
    // config.module
    //   .rule('icons')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/icons'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   })
    //   .end();

    // // set preserveWhitespace
    // config.module
    //   .rule('vue')
    //   .use('vue-loader')
    //   .loader('vue-loader')
    //   .tap(options => {
    //     options.compilerOptions.preserveWhitespace = true;
    //     return options;
    //   })
    //   .end();

    // config
    //   // https://webpack.js.org/configuration/devtool/#development
    //   .when(process.env.NODE_ENV === 'development', config =>
    //     config.devtool('cheap-source-map')
    //   );

    // config.when(process.env.NODE_ENV !== 'development', config => {
    //   config
    //     .plugin('ScriptExtHtmlWebpackPlugin')
    //     .after('html')
    //     .use('script-ext-html-webpack-plugin', [
    //       {
    //         // `runtime` must same as runtimeChunk name. default is `runtime`
    //         inline: /runtime\..*\.js$/
    //       }
    //     ])
    //     .end();
    //   config.optimization.splitChunks({
    //     chunks: 'all',
    //     cacheGroups: {
    //       libs: {
    //         name: 'chunk-libs',
    //         test: /[\\/]node_modules[\\/]/,
    //         priority: 10,
    //         chunks: 'initial' // only package third parties that are initially dependent
    //       },
    //       elementUI: {
    //         name: 'chunk-elementUI', // split elementUI into a single package
    //         priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
    //         test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
    //       },
    //       commons: {
    //         name: 'chunk-commons',
    //         test: resolve('src/components'), // can customize your rules
    //         minChunks: 3, //  minimum common number
    //         priority: 5,
    //         reuseExistingChunk: true
    //       }
    //     }
    //   });
    //   config.optimization.runtimeChunk('single');
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('utils', resolve('src/utils'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'));
  }
}
