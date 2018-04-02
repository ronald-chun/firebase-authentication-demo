var http = require('http');
var express = require('express');
var app = express();

app.use(express.static('.'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.listen(4000, function(){
	console.log('Server is running on port http://localhost:4000');
});



