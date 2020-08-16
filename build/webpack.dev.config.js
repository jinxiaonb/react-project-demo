const {merge} = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const baseWebpackConfig = require("./webpack.base.config");
const utils = require("./utils");


const htmlWebpack = new HtmlWebPackPlugin({
    template:"./src/index.html",//html模板
    filename: utils.resolve("./../dist/index.html"),//HTML模板生成的路径
    inject:true//script标签位于html文件的body底部
    
});

module.exports = merge(baseWebpackConfig, {
    mode:"development",
    plugins:[
        htmlWebpack
    ],
    devServer:{
        historyApiFallback:true,//当找不到路径的时候，默认加载index.html文件
        hot:true,
        contentBase:false,//告诉服务器从哪里提供内容，只有在想要提供静态文件时才需要
        port:"8081",//指定端口号
        publicPath:"/",//访问资源加前缀
        proxy:{//请求接口代理
            '/apiTest':{
                target:'http://localhost:3001',
                changeOrigin:true,
                secure:false
            }
        }
    }
})