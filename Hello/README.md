# webpack 入門 commit 章節1 
- npm init
- npm install webpack webpack-cli --save-dev
- add webpack.config.js file
- webpack.config.js file add module.exports = { entry: ... , output: ....}


# webpack 入門 commit 章節2 path 設定檔
- replace entry: ./index.js to src/index.js  from use path.resoleve()
1. path.resolve()
  - 可將相對路徑或是路徑片段解析成絕對路徑
2. __dirname
  - 在nodejs 裡面代表的一個特殊變數,指的是當前執行文件所在目錄的完整目錄位置
3. module.exports裡的context 指定解析路徑的主要位置


# webpack 入門 commit 章節3 mode 版本控制 & node env
- mode 設定 development or production
- process.env.NODE_ENV 取得環境變數
1. without cross-env
  - --mode development or --mode production in package.js script
2. with cross-env

- 使用 webpack.config.js 裡的mode 來替換script 裡--mode 行為


# webpack 入門 commit 章節4 watch
- sciprt add --watch for webpack


# webpack 入門 commit 章節5 filename
- entry & output 設定
1. entry 物件來指定多個進入點
2. output [name] 會依照entry 的name 來更改output

# webpack 入門 commit 章節6 css loader
- install css-loader --save-dev   style-loader --save-dev
- setting in webpack.comfig.js https://webpack.js.org/loaders/css-loader/
- npm install --save-dev mini-css-extract-plugin https://github.com/webpack-contrib/mini-css-extract-plugin
- npm i postcss -D https://github.com/postcss/postcss#usage & add postcss.config.js

# webpack 入門 commit 章節7 file-loader
- npm i file-loader -D https://v4.webpack.js.org/loaders/file-loader/
- npm i html-loader -D 


# webpack 入門 commit 章節8 sass-loader
- npm install sass-loader sass --save-dev  https://webpack.js.org/loaders/sass-loader/#root

# webpack 入門 commit 章節9 webpack-dev-server
- npm i webpack-dev-server -D 啟動dev sevrer  https://webpack.js.org/configuration/dev-server/  https://webpack.js.org/api/stats/

# webpack 入門 commit 章節10 babel
1. npm i babel-loader @babel/core @babel/preset-env -D  https://babeljs.io/
  - @babel/core : 程式需要調用babel 的API進行編譯
  - @babel/preset-env : 可以使用最新版本的Javascript然後去編譯,不用理會哪些五發需要轉換
2. 新增babel 設定檔 .babelrc or babel.config.json 看官網

# webpack 入門 commit 章節11 import vs require 模組
- import 是在 es6 後出來的 / require follow commonJs
- 1. export -> import 
- 2. module.exports -> require

# webpack 入門 commit 章節12 webpack resolve


# webpack 入門 commit 章節13 url-loader
- 將過小的圖片轉換為 base64 格式來使用
