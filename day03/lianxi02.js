var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url=="/favicon.ico"){
        return ;
    }
    // console.log(111);
    if(req.url=="/lianxi02_circle"){
        fs.readFile("./lianxi02_circle.html",function(err,data){
            if(err){
                res.end("读取页面出错")
                return ;
            }
            res.end(data); 
            // console.log(222);
        });      
        return ;
    }
    // console.log(333);
    if(req.url=="/lianxi02_square"){
        fs.readFile("./lianxi02_square.html",function(err,data){
            if(err){
                res.end("读取页面出错")
                return ;
            }
            res.end(data);
            
        });
        return ;
    }
    // 其他情况，跳转到登录页面
   res.end("url error"); 
});       
server.listen(4000);