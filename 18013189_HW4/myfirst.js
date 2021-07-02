var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('18013189_HW4_차윤범.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);