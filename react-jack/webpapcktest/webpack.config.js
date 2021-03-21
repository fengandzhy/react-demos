const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//抽离css文件
const OptimizeCss=require('optimize-css-assets-webpack-plugin');
let UglifyjsPlugin=require('uglifyjs-webpack-plugin');


module.exports={
    //多路口
    entry:{
        index:'./src/index.js',
        admin:'./src/admin.js'
    },
    mode:'development',
    devServer: {//开启服务器配置
        port: 8089,//端口，
        host: "localhost",//ip地址:localhost本地，0.0.0.0可以访问网络地址
        progress: true,//开启进度条
        contentBase: "./dist",//默认打开目录
        //open:true, //自动打开浏览器,
        compress: true,//启动gzp压缩
        proxy: {
            '/api': {
                target: 'http://vueshop.glbuys.com/api',
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': '' //需要rewrite的,
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            chunks:'[index]',
            minify: { //折叠换行true不换行
                collapseWhitespace:true
                // removeAttributeQuotes:true,//去除引号
                // removeComments:true,//去除注释
                // removeEmptyAttributes:true,//去除空属性
            },
            hash:true
        }),

        new HtmlWebpackPlugin({
            template: "./public/admin.html",
            filename: "admin.html",
            chunks:'[admin]',
            minify: { //折叠换行true不换行
                collapseWhitespace:true
                // removeAttributeQuotes:true,//去除引号
                // removeComments:true,//去除注释
                // removeEmptyAttributes:true,//去除空属性
            },
            hash:true
        }),
        new MiniCssExtractPlugin({
            filename:'./static/css/main.css'
        })
    ],
    module: {
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,//都放到了上面的main.css里面
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins:[
                                    [
                                        "autoprefixer",
                                        {
                                            "overrideBrowserslist": [
                                                'last 10 Chrome versions',
                                                'last 5 Firefox versions',
                                                'Safari >= 6',
                                                'ie> 8'
                                            ]
                                        },
                                    ],
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit:100*1024,
                            outputPath: './static/images',
                            publicPath: './static/images',
                        },
                    },
                ],
            },
            {
                test:/\.(js|jsx)$/,//支持require('*.js')文件
                use: {
                    loader: 'babel-loader',
                    options: {//用babel-loader 需要把es6-es5
                        presets: [
                            '@babel/preset-env', '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                },
                include:path.resolve(__dirname,'src'),//需要转换的文件夹
                exclude:/node_modules/ //排除转换的文件夹
            }
        ]
    },
    output: {
        //filename: "bundle.js",
        filename:'[name].js',
        path:path.resolve('dist'), //必须是绝对路径
        publicPath: "/"  //build之后的公共路径,
    },
    optimization: {//优化项启动后mode模式代码压缩不再生效，必须配置js压缩插件
        minimize: true, //对于webpack5来说这一步是必须要加的
        minimizer: [
            new OptimizeCss(),//优化css
            new UglifyjsPlugin({
                cache:true, //是否用缓存
                parallel:true, //是否并发打包
                sourceMap:true //es6映射es5需要用
            })
        ]
    }
}