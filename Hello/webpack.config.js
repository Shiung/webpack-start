const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log('__dirname', __dirname)

console.log('__dirname src', path.resolve(__dirname, './src'))

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

module.exports = {
  // 依照環境變數來
  mode: process.env.NODE_ENV,
  // context 指定webpack 路徑的資料是哪個
  context: path.resolve(__dirname, './src'),

  // entry: './index.js',
  entry: {
    index: './js/index.js',
    about: './js/about.js'
  },
  output: {
    // 路徑
    path: path.resolve(__dirname, './dist'),

    // 1. 指定單擋名稱
    // filename: 'index-bundle.js'
    // 2. [name] 會依照entry object的key name 來更改output
    filename: '[name]-bundle.js'
  },
  module: {
    rules: [
      // 1. add css loader
      {
        test: /\.css$/,
        // // loader 執行順序會從後到錢 ex: 先執行css-loader 在執行style-loader
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ],
  },
  plugins: [new MiniCssExtractPlugin()]
}