var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello madafaka');    
});

app.use('/public', express.static(__dirname + '/public'));

app.listen(3000);
