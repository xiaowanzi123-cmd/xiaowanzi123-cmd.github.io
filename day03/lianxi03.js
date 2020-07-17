var http = require("http");
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
server.listen(4000);