/**1. 导出对象是一个函数，这个函数运行后会返回一个对象
 * 2. 声明一个空对象$,是最终返回值。一个属性对应一个插件
 * 3. 读取package.json文件，再读取devDependencies属性
 * 4. 读取此对象所有的key,找到以gulp-开头的模块。
 * 5. 通过 require加载这些模块，得到返回值赋给$对象。属性名把gulp去掉即可
 * 6. 然后返回此$对象
 **/
module.exports = function () {
    var $ = {};
    var package = require('./package.json');
    var devDependencies = package.devDependencies;
    for (var attr in devDependencies) {//循环每个开发依赖
        if (attr.startsWith('gulp-')) {//如果属性名是以gulp-开头的话,加载此模块并赋给$的属性  minifyHtml minify-html
            $[toKey(attr)] = require(attr);
        }
    }
    return $;
}
//把模块名转成属性名
function toKey(attr) {
    return attr.slice(5).replace(/-(\w)/g, function () {
        return arguments[1].toUpperCase();
    })
}