var str = 'minify-html-face';
var result = 'minifyHtmlFace';
str = str.replace(/-(\w)/g,function(){
    return arguments[1].toUpperCase();
});
console.log(str);