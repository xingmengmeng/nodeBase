## webpack编写顺序 
1. 本地安装 webpack
```
npm install webpack
```
2. 编写源代码和入口文件
3. 编写webpack.config.js，指定入口文件，还有输出目录和文件名
4.在package.json中添加脚本，
```
"scripts": {
    "build": "webpack"
  },
```
5.在命令执行npm run build
6.执行脚本的时候，会在当前目录下的node_modules下.bin目录下找 webpack.cmd可执行文件并执行
7. 执行的时候会找webpack.config.js文件，找到入口文件，把入口文件和它依赖的所有文件全部打包到指定的目录下指定的文件名中去。

## webpack-dev-server