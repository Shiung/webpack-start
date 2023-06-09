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
    filename: './js/[name].js', //'[name]-bundle.js'
    // ./js 代表轉譯後output 到dist 裏多了 js路徑

    assetModuleFilename: 'images/[hash][ext][query]'
  },
  resolve: {
    alias: {
      imgSrc: path.resolve(__dirname, 'src/img/')
    }
  },
   // dev server
  devServer: {
    compress: true,
    port: 5678,
    // stats: {}
  },
  module: {
    rules: [
      // 1. add css loader
      {
        test: /\.css$/,
        // // loader 執行順序會從後到錢 ex: 先執行css-loader 在執行style-loader
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      // 2. file-loader
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
              //      陸贈   檔名    副檔名
            }
          }
        ]
      },
      // 3. sass
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require.resolve("sass"),
            },
          },
        ],
      },
      // babel loader 
      {
        test: /\.js$/i,
        use: 'babel-loader'
      },

      // // url-loader
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       // options: {
      //       //   limit: true,
      //       //   // name: '[path][name].[ext]?[hash:8]'
      //       // },
      //     },
      //   ],
      //   type: 'asset/resource'
      // },
    ],
  },
  plugins: [new MiniCssExtractPlugin({
    filename: './css/[name].css'
    // option 設定css output的filename  ./css 代表轉譯後output 到dist 裏多了 css路徑
  })]
}