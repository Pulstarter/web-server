var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware');

app.use(middleware.logger);

app.get('/', function(req, res){
    res.send('Hey boy, hey girl');    
});

app.use('/public', express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log('Server started on port ' + PORT);
});
