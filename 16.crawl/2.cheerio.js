var cheerio = require('cheerio');
var html = `
<td class="keyword">
  <a href="" class="list-title">血战钢锯岭</a>
</td>
<td class="keyword">
  <a href="" class="list-title">你的名字</a>
</td>
`;
//会把此字符串转成一个类似 于jquery的对象
/**
 * 1.读取你保存的baidu.html
 * 2. 使用cheerio把里面的电影列表提取出来 {name:'血战钢锯岭',url:'https://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&fr=top1000&wd=%C4%E3%B5%C4%C3%FB%D7%D6'}
 * 3.然后打印出来
 * @type {*}
 */
var fs = require('fs');
//先读取文件的内容，指定文件的编码，那么得到的result就是一个字符串
fs.readFile('./baidu.html','utf8',function(err,result){
    var $  = cheerio.load(result);
    var items = [];
    //在此对象中寻找符合此条件的元素列表
    $('.keyword .list-title').each(function(){
        var $me = $(this);
        var item = {
            name:$me.text(),//得到这个元素的文本
            url:$me.attr('href')//得到这个元素的href属性
        }
        items.push(item);
    })
    console.log(items);
});
