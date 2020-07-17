
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template:"./src/index.html",
    filename:"./index.html"
});


module.exports = {
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },{
                test:/\.html$/,
                use:[
                    {
                        loader:"html-loader"
                    }
                ]
            },{
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },{
                        loader:"css-loader",
                        options:{
                            modules:true,//开启css模块化
                            importLoaders:1,//设置css-loader前还有多少loader被加载，例如sass-loader应该在css-loader之前加载
                            localIdentName:"[name]_[local]_[hash:base64]",//可以配置生吃的class name
                            sourceMap:true,
                            minimize:true
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        htmlWebpackPlugin
    ],
    resolve:{
        extensions:['.js','.jsx','.json']//解决import引入是加载文件规则，可省略这几个的文件后缀
    }
};