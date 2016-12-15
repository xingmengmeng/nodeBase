# $location服务
## 新版本不支持hash值的用法，分以下三步配置$location服务
- 在head标签汇中，添加base标签，用于规定页面中所有相对链接的基准URL。
```
<base href="/">
```
  注：这样配置后，页面中所有以'/'开头的相对路径都会被解析为绝对URL，解析的依据是文档初始化时候的绝对URL。（如：'/myText'——>'http://localhost:8080/myText'）
  
- 配置路由时，注入服务：$locationProvider，并设置用html5进行路径解析。
```
    app.config(function ($routeProvider,$locationProvider) {
        $locationProvider.html5Mode(true);
        ...
    });
```
- 更改a标签中url的写法。
```
<a href="myText">测试</a>
```
  注：img、link、form标签中的URL写法也与a标签相同。
## $location服务的配置
   $location服务包含HTML5模式和Hashbang模式，可以用$locationProvider进行配置。
   
- hashPrefix(最新版本的angular以废弃此方法) 
    不进行配置时，默认为Hashbang模式，且默认为空字符串。所以Angular生成的哈希值为一个''。如果hashPrefix被设置为'!'，那么Angular会使得url后面跟着一个!号。
```
$locationProvider.hashPrefix('!');
```
- html5Mode
 一个布尔值，标识$location服务是否运行在HTML5模式下。
```
 $locationProvider.html5Mode(true);
```

## $location服务使用之一事项
- 一些超链接仍然会刷新页面 
* 带有target元素的链接
 ```
 <a href="/some/link" target="_self">link</a> 
 ```
* 跳往其他不同域名的绝对链接 
``` 
<a href="http://www.angularjs.org">link</a>  
```
- 为防止在超链接页面刷新报错，需在服务端做设置，若路由以解析文档的URL开头，都重定向到首页。





