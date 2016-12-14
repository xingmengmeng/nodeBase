var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
module.exports = {
 entry:'./app/index.js',//指定入口文件
 output:{
     path:'./build',//指定打包后的文件存放目录
     filename:'bundle.js'//指定打包后的文件名
 },
 devServer:{
     //指定静态文件根目录
     contentBase:'./build',
     port:8080,
     inline:true //当源代码变化后自动重新打包并通知浏览器刷新
 },
 module:{
     loaders:[
         {
             test:/\.js$/,
             loader:'babel'
         }
     ]
 },
 plugins:[
     new HtmlWebpackPlugin({template:'./app/index.html'}),
     new OpenBrowserWebpackPlugin({url:'http://localhost:8080'})
 ]
}