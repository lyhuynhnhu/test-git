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

    
    //write the content file

    // var x=path.basename(req.url)*1;
    // result=x*2;
    // res.write(result.toString());

    var id=path.basename(req.url);
    var requestedUser = users[id];

    if (requestedUser) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("hi "+requestedUser.name+"");

    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});       
    }

    res.end();

}).listen(8080);

console.log('running at http://127.0.0.1:8080/');