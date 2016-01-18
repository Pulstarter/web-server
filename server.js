var express = require('express');
var app = express();

var middleware = require('./middleware');

app.use(middleware.logger);

app.get('/', function(req, res){
    res.send('Hey boy, hey girl');    
});

app.use('/public', express.static(__dirname + '/public'));

app.listen(3000);
