/* var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
        return ;
    }
    if(req.url == '/lianxi03'){
        fs.readFile("./lianxi03.html",function(err,data){
            res.end(data);
        })
    }else{
        res.end("获取页面错误");
    }
});
server.listen(4000); */

// 老师写的
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
        return ;
    }
    res.setHeader("content-type","text/html;charset=utf-8");
    if(req.url == "/xiaoming"){
        res.end("Hello ,I am 小明");
        return ;
    }
    if(req.url == "/xiaohong"){
        res.end("Hello ,I am 小红");
        return ;
    }
    fs.readFile("./lianxi03.html",function(err,data){
        if(err){
            res.end("读取页面出错")
            return ;
        }
        res.end(data);
    });
});
server.listen(4000);
