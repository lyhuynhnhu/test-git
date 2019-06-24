var http= require('http');
var fs= require('fs');
var url=require('url');
var path=require('path');

var users = {
    1: {
        name: "Nhu",
        age: 21
    },
    2: {
        name: "Toan",
        age: 22
    }
}

//create a server
http.createServer( function(req, res){
    var pathname= url.parse(req.url).pathname;
    //print file's name
    console.log("request for "+ pathname +" received");

    //Return the last portion of a path
    var id=path.basename(req.url);  
    var requestedUser = users[id];

    if (requestedUser) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("Hi "+requestedUser.name+", your age: "+requestedUser.age);
        res.end();

    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});  
        res.end('<h1>404 not found</h1>');     
    }
    
}).listen(8080);

console.log('running at http://127.0.0.1:8080/');