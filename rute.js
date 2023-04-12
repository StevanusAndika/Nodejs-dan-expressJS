var http = require('http');

 var server=http.createServer(function (request, response) {
   if(request.url=='/'){
    response.end('<h1>Home Page</h1>');

   }else if (request.url=='/profile'){
    response.end('<h1>Company Page Profile</h1>');
}


   
   else if (request.url=='/contact'){
    response.end('<h1>Contact Us Page</h1>');
}else{
    response.status =404;
    //page not found

response.end('<h1>Page Not Found !</h1>');
}
 });
 console.log('Server aktif di http://127.0.0.1:3000/');
 server.listen(3000);