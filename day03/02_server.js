// 第一步:引入模块
    var http = require("http");
// 第二步:创建服务
    var server = http.createServer(function(req,res){
        // 第四部:返回响应给浏览器,参数就是返回的数据
        res.end("hello world!");
    });
  
// 第三步:开启监听,端口号位4000
    server.listen(4000);
