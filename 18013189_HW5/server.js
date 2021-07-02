var http = require('http');   // 서버 만드는 모듈 불러오기
var fs = require('fs');
var server = http.createServer();

// 클라이언트 요청 이벤트 처리
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
    console.log('클라이언트 요청이 들어왔습니다.');
    url = '/18013189_HW5.html';   // 실행할 url
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(8080);      // 실행할 port

// 서버 종료 이벤트 처리
server.on('close', function(){
    console.log('서버가 종료됩니다.');
});
