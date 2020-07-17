#### 提交日志记录
* 2020-07-17 搭建了webpack4+babel7+react16基础架构，可以使用sass,less,图片加载,font字体加载。版本号为v1.0.1
  * webpack-merge使用方式和早期的不同，现在引入是const {merge} = require("webpack-merge");
  * node-sass这个包需要科学上网才好下载
  * build/utils.js这个文件用于打包时公用的方法
  * html-webpack-plugin在dev和prod下配置不同，主要区别是文件的压缩和属性值上引号