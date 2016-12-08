module.exports = {
    //指定入口文件 要把哪个文件以及它依赖的文件打包成一个文件
    entry:'./app/index.js',
    output:{//指定输出的文件目录和文件名
        path:'./build', //指定输出的目录
        filename:'bundle.js' //指定输出的文件名
    }
}