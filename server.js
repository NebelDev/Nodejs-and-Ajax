var express = require('express');
var app = express();

var options = {
  index: "index.html"
};
app.use(express.static(__dirname + '/html',options));
app.get("/sum",function(req,res) {
	//Convert strings to int
	var sum = parseInt(req.query.c1, 10) + parseInt(req.query.c2, 10);
	//Convert the integer of the sum in string
	res.send(sum.toString());
	
});
app.listen(3000);
