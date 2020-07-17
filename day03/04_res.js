var http = require("http");
var server = http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
        return ;
    }
    console.log(res);

    //只能传字符串,显示到页面上
    //end方法的作用:结束请求,返回响应
    //res.end("over");
    // res.end("123");//end方法只能执行一次
    // 如果返回多条数据
    //res.write方法:返回数据,不结束请求
    //设置响应头,中文编码
    res.setHeader("Content-Type","text/html;charset=utf-8");
    res.write("<h1 style='color:red'>第一次返回数据</h1>");
    res.write("<h2 style='color:orange'>小标题222</h2>");
    res.end("<h3 style='color:green'>over</h3>");
})
server.listen(4000);