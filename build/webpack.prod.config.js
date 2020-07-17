const {merge} = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const baseWebpackConfig = require("./webpack.base.config");
const utils = require("./utils");


const htmlWebpack = new HtmlWebPackPlugin({
    template:"./src/index.html",//html模板
    filename: utils.resolve("./../dist/index.html"),//HTML模板生成的路径
    inject:true,//script标签位于html文件的body底部
    hash:true,//在打包的资源插入html会加上hash
    minify:{//html文件进行压缩
        removeComments:true,//去注释
        collapseWhitespace:true,//压缩空格
        removeAttributeQuotes:true//去除属性，标签的引号
    }
});

module.exports = merge(baseWebpackConfig, {
    mode:"production",
    plugins:[
        htmlWebpack
    ],
    devServer:{
        
    }
})