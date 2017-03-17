/**
 *  MXR change at 20161108
 *
 *  update babel and inline babel-polyfill to support es6 other API ( promise... )
 *  HtmlWebpackPlugin      no html but tmpl2html in compile
 *  WebpackMd5Hash         solve single file hash ( single css file )
 *  add-module-exports     to correct react-router require
 *  autoprefixer-loader work in with postcss
 *  common.[chunkhash].js  'no work with' webpack-dev-server --hot
 *  split main.js
 *
 *  support es6 ( promise... ) es7 ( fetch... )
 *  for example
 *  import "babel-polyfill";  import 'whatwg-fetch';
 *  fetch(url).then(response => response.json())
 *          .then(data => console.log(data))
 *          .catch(e => console.log("Oops, error", e))
 *
 */

var webpack = require('webpack');

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var WebpackMd5Hash = require('webpack-md5-hash');

var isProduction = function () {

  return process.env.NODE_ENV === 'production';

};

var plugins;
/*
 *  init plugins
 */

if ( process.env.NODE_ENV === 'production' ) {

    plugins = [

        new WebpackMd5Hash(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common_[hash].js'
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common',
        //     filename: 'common_[chunkhash].js'
        // }),
        new HtmlWebpackPlugin({
            template: './views/index.html',
            filename: './views/index.html',
            chunks: ['index', 'common'],
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            test: /(\.jsx|\.js)$/,
            output: {
                comments: false,
            },
            compress: {
                warnings: false,
                drop_console: true
            },
            sourceMap: true
        })
    ];

} else {

    plugins = [

        new WebpackMd5Hash(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common_[hash].js'
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common',
        //     filename: 'common_[chunkhash].js'
        // }),
        new HtmlWebpackPlugin({
            template: './views/index.html',
            filename: './views/index.html',
            chunks: ['index', 'common'],
            inject: 'body'
        })
    ];

}

 
var config = {

    entry: {
        index: './js/index.js'
    },
    output: {
        path: !isProduction() ? '/' : '../../pic2.58.com/finance/58/m/js/new_lottery', //release 到本地的路径
        publicPath: !isProduction() ? '/' : '//j2.58cdn.com.cn/finance/58/m/js/new_lottery/',//文件路径替换
        chunkFilename: "[name]_[hash].js",
        filename: '[name]_[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015', 'react'],
                    plugins: [
                        "add-module-exports"
                    ]
                }
            },
            { test: /\.css$/, loader: "style!css!autoprefixer-loader" },
            { test: /\.scss$/, loader: "style!css!autoprefixer-loader!sass" },
            { test: /\.png$/, loader: "url?limit=8192&name=img/[name].[ext]" }
        ] 
    },
    //externals 指定的依赖不会被webpack解析,但会成为bundle里的依赖
    externals: {
        "react": 'React',
        "react-dom": 'ReactDOM',
        "react-router": 'ReactRouter'
    },
    plugins: plugins,
    resolve: {
        //自动扩展文件后缀名，意味着我们require/import模块可以省略不写后缀名
        extensions: ['', '.js', '.jsx']
    },
    //如果需要代理到RD的电脑上可通过此处配置IP&&端口
    // devServer: {
    //     proxy: { 
    //         '/newspaper/*': {
    //             target: 'http://10.252.9.199:80',
    //             secure: false,
    //             changeOrigin: true
    //         }
    //     }
    // },
    devtool: 'source-map' //debug时将包里的js对应到源码
};

module.exports = config;