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
