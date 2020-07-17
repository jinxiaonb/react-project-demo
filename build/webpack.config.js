const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template:"./src/index.html",//html模板
    filename:"./../dist/index.html",//HTML模板生成的路径
    inject:true,//script表情位于html文件的body底部
    hash:true,//在打包的资源插入html会加上hash
    minify:{//html文件进行压缩
        removeComments:true,//去注释
        collapseWhitespace:true,//压缩空格
        removeAttributeQuotes:true//去除属性，标签的引号
    }
});


function resolve(dir){
    return path.resolve(__dirname, dir);
}

module.exports = {
    mode:"development",//指定构建环境
    entry:{//入口
        app:"./src/app"
    },
    output:{//出口
        path:resolve("../dist"),
        filename:"js/[name].[hash].js",
        publicPath:"/"//打包后的资源的访问路径前缀
    },
    module:{

    },
    plugins:[
        htmlWebpackPlugin
    ],
    devServer:{//开发环境本地启动的服务配置

    }
}