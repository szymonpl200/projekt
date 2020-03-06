var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
console.log('@@@MAGAR'+__dirname+'/public');
app.use(express.static(__dirname + '/public'));

var server = app.listen(port);
