var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

var html = fs.readFileSync('./uploadform.html');

var server = http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/html'});
   if (request.method === 'GET') {      
      response.end(html);
   } else if (request.method === 'POST') {
      var form = new formidable.IncomingForm();
      form.parse(request, function (err, fields, files) {
         // mengambil nama file temporari
         var tempFile = files.userfile.path;
         // menentukan tujuan upload
         var destFile = './uploads/' + files.userfile.name;
         // memindahkan file temporari ke tujuan upload
         fs.rename(tempFile, destFile, function (error) {
            if (error) {
               response.end('Proses upload gagal');
               throw error;
            }
            response.end('Proses upload berhasil')
         });
      });
      
   }
});

server.listen(3000);
