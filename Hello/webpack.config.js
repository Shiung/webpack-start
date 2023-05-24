const path = require('path')

console.log('__dirname', __dirname)

console.log('__dirname src', path.resolve(__dirname, './src'))

module.exports = {
  // context 指定webpack 路徑的資料是哪個
  context: path.resolve(__dirname, './src'),

  entry: './index.js',
  output: {
    // 路徑
    path: path.resolve(__dirname, './dist'),
    filename: 'index-bundle.js'
  }
}