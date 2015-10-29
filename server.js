var express = require('express');
var app = express();
var port = 3000;

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log("Private Route Hit !");
		next();
	},
	logger: function(req, res, next){
		
		console.log("Request Date : "+ new Date().toString() + ' ' + req.method + ' '+ req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

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