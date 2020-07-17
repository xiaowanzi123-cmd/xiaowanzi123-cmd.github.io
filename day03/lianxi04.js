/* var http = require("http");
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
}).listen(4000); */


var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req,res){
    // 小图标请求
    if(req.url == "/favicon.ico"){
        return ;
    }
    //登录请求
    res.setHeader("content-type","text/html;charset=utf-8");
    // 将字符串的地址转换为对象
    var urlObj = url.parse(req.url,true);
    console.log(urlObj);
    var path = urlObj.pathname;
    var query = urlObj.query;
    
    if(path == "/login"){
        var username = query.username;
        var password = query.password;
        fs.readFile('./users.json',function(err,data){
            if(err){
                res.end("故障");
                return ;
            }
            data = data.toString();
            var obj = JSON.parse(data);
            var flag;//假设用户名密码错误
            /* console.log(obj);
            res.end(); */
            for(var i=0;i<obj.length;i++){
                var u = obj[i];
                if(username == u.username && password == u.password){
                    flag = true;//假设错误
                    res.end("登录成功");
                    break;
                }
            }
            if(flag){
                res.end("登录成功");
            }else{
                res.end("用户名密码错误");
            }
        })
        return ;
    }
    //其他情况
    fs.readFile("./lianxi04_login.html",function(err,data){
        if(err){
            res.end("ERROR")
            return ;
        }
        res.end(data);
    })
}).listen(4000);