/*
* 导出一个函数  函数执行后  返回一个对象
* 声明一个空对象$ 是最终返回值  一个熟悉对应一个插件
* 2.读取package.json文件  拿到devDependencies属性
* 3.读取所有的key 看是不是gulp-开头  通过require加载这些模块  得到返回值  赋值给$对象  属性名把gulp-去掉
* 4.返回此$对象
* */
module.exports=function() {
    var $={};
    var package=require('./package.json');
    var dev=package.devDependencies;
    for(var attr in dev){
        if(attr.startsWith('gulp-')){
            $[toKey(attr)]=require(attr)
        }
    }
    return $;
}
function toKey(attr) {
    return attr.slice(5).replace(/-(\w)/g,function () {
        return arguments[1].toUpperCase();
    })
}

