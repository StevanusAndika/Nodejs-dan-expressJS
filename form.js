var http = require('http');
//import modul http

var qs = require('querystring');
//import sub query string

var server = http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   if (request.url == '/') {
      switch (request.method) {
         case 'GET':
         response.end(
            '<h2>Form Layanan Pelanggan:</h2>' +
            '<form action="/" method="post">' +
            '   Nama:<br>' +
            '   <input type="text" name="nama"><br><br>' +
            '   Email:<br>' +
            '   <input type="email" name="email"><br><br>' +
            '   Nomor Wa/Telpon:<br>' +
            '   <input type="number" name="telpon"><br><br>' +
            '   <input type="submit" name="btnSubmit" value="Kirim">' +
            '</form>'
            );
         break;
         case 'POST':
         var body = '';

         request.on('data', function (data) {
            body += data;
         });

         request.on('end', function () {
            var form = qs.parse(body);
            response.end(
               'Data yang dikirim:<br>' +
               'Email: ' + form['email'] + '<br>' +
               'Nomor Wa/Telpon: ' + form['telpon']
               );
         });
         break;
         default:
         response.end('Metode pengiriman tidak dikenal');
      }
   }   
});

server.listen(3000);