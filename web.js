// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  var i, a, b, c, max;
 
	max = 1000000000;
	 
	var d = Date.now();
	 
	for (i = 0; i < max; i++) {
	    a = 1234 + 5678 + i;
	    b = 1234 * 5678 + i;
	    c = 1234 / 2 + i;
	}
 
console.log(Date.now() - d);
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});