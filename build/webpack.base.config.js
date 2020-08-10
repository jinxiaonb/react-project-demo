const path = require("path");
const utils = require("./utils");

const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry:{//入口
        app:"./src/app"
    },
    output:{//出口
        path: utils.resolve("../dist"),
        filename:"js/[name].[hash].js",
        publicPath:"/"//打包后的资源的访问路径前缀
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },{
                        loader:"css-loader"
                    }
                ]
            },
            {
                test:/\.less$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"less-loader"
                    }
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    {
                        loader:"style-loader",
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"sass-loader"
                    }
                ]
            },
            {
                test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader:"url-loader",
                options:{
                    limit:10000,
                    name:"static/img/[name].[hash:7].[ext]"
                }
            },
            {
                test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader:"url-loader",
                options:{
                    limit:10000,
                    name:"static/fonts/[name].[hash:7].[ext]"
                }
            }
        ]
    },
    plugins:[
        new CopyPlugin({
                patterns:[
                    {
                        from: utils.resolve("../static"),
                        to: "static",
                        globOptions:{
                            // dot:true,
                            // gitignore:true,
                            ignore:['.*']
                        }
                    }
                ]
            })
    ],
    resolve:{
        extensions:['.js','.jsx','.json'],
        alias:{
            "@":path.join(__dirname,"..","src")//在项目中使用@符号代替src路径
        }
    }
}