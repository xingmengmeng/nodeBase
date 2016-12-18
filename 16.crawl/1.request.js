/**
 * request 第三方的请求模块，用于发送http请求
 */

/**
 * 1 编码的产生原因 是为了让人和计算机进行沟通 二进制和字符间的转换
 * ascii码 0-127
 * 65 A
 * 中国
 *  GB2312
 *   128 中
 *   129 国
 *  GBK
 *
 *  日本人
 *  128
 *
 *  utf8 unicode
 *
 *
 */
//当请求响应完成之后调用的回调函数
// err 错误对象 response 响应对象 body 响应体
var request = require('request');
var fs = require('fs');
var iconv = require('iconv-lite');
//请求的URL地址
var url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';

request({url,encoding:null},function(err,response,body){
   body =  iconv.decode(body,'gbk');
   console.log(body);
   fs.writeFile('./baidu.html',body);
})

