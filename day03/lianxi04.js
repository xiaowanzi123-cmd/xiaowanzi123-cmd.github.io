var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
        return ;
    }
    var urlObj = url.parse(req.url,true);
    console.log(urlObj);
    var path = urlObj.pathname;
    var query = urlObj.query;
    var username = query.username;
    var password = query.password;
    res.setHeader("content-type","text/html;charset=utf-8");
    if(path=="/login"){
        if(username == "xiaowanzi" && password == "123"){
            res.end("欢饮您，"+username);
        }else{
            res.end("用户名或密码错误");
        }
        return ; 
    }
    //其他情况
    fs.readFile("./lianxi04_login.html",function(err,data){
        if(err){
            res.end("读取页面出错")
            return ;
        }
        res.end(data);
    })
}).listen(4000);