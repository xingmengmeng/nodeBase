## 1.初始化项目
### 1.1 初始化项目
```
npm init -y
npm install webpack webpack-dev-server --save-dev
```

### 1.2 创建webpack配置文件 webpack.config.js
```
module.exports = {
 entry:'./app/index.js',//指定入口文件
 output:{
     path:'./build',//指定打包后的文件存放目录
     filename:'bundle.js'//指定打包后的文件名
 }
}
```

### 1.3 创建脚本
```diff
  "scripts": {
+    "build": "webpack",
+    "dev":"webpack-dev-server"
  },
```

### 1.4 打包文件
```
npm run build
```

### 1.5 启动开发服务器
```
npm run dev
```
