/**
 * Created by jeremycloutier on 1/8/16.
 */
var express = require('express');
var path = require('path');
var republican = require('./public/scripts/republican');
var democrat = require('./public/scripts/democrat');


var app = express();

app.use(express.static('public'));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/getRepublican', function(request, response){
    response.send(republican);
});

app.get('/getDemocrat', function(request, response){
    response.send(democrat);
});

app.listen(3000, function(){
    console.log('Listening on port 3000.');
});