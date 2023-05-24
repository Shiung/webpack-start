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