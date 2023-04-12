
var http = require('http');

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.end('<h1>Hei There, Now Iam Study NodeJs</h1>');
}).listen(3000);

console.log('Server aktif di http://127.0.0.1:3000/');