/**
 *
 */
var ejs = require('ejs');
var readFile = require('./readfile');
/*
只有当所有的promise都成功了才会调用成功回调
Promise.all([
    readFile('tmpl.ejs'),
    readFile('user.json')
]).then(function(result){
    var res = ejs.render(result[0], JSON.parse(result[1]));
    console.log(res);
});*/
//只要任何一个promise成功就可以调用成功的回调
Promise.race([
    readFile('tmpl.ejs'),
    readFile('user.json')
]).then(function(result){
    console.log(result);
});


// => Rendered HTML string

/*

ejs.renderFile('tmpl.ejs', {"name":"zfpx","age":9}, function(err, str){
    // str => Rendered HTML string
    console.log(str);
});
*/
