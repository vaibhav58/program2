var express= require('express');
var path=require('path');
var http = require('http');
var app=express();
var port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));


	app.get('/',function(request,response){
		response.sendFile(path.join(__dirname ,'/public','setup.html'));
		console.log('/');
	});

app.listen(port,function(request,response){ 


	

console.log("server started listen on port 3000");
});