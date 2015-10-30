var express = require('express');
var app = express();
var port = 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);
app.use(middleware.requireAuthentication);

app.get('/about', function (req, res){
	res.send("About Us !");
});
app.get('/', function (req, res){
	res.send("Hello Express");
});
app.use(express.static(__dirname + '/public'));
app.listen(port, function(){
	 console.log("Express server listening at " + port);
});