const merge = require('webpack-merge') // webpack-merge
const common = require('./webpack.common.js') // 汎用設定をインポート
const path = require('path');
const outputPath = path.resolve(__dirname, 'public');

// common設定とマージする
module.exports = merge(common, {
  mode: 'development', // 開発モード
  devtool: 'inline-source-map', // 開発用ソースマップ
  devServer: {
    contentBase: outputPath,
    historyApiFallback: true,
    open: true,
    watchContentBase: true
  }
})