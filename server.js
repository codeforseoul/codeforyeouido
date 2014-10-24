var express = require('express');

/*
 * create server
 * -------------------------------------------------------*/
var app  = express();
var server = require('http').createServer(app);

var config = require('./config');



/*
 * import external configuration information
 * -------------------------------------------------------*/
require(config.path.api + '/bootstrap')(app, config);

/* 
 * Execute Server
 * -------------------------------------------------------*/
app.set('port', config.port || 9999);
server.listen(app.get('port'), function(){
    console.log('Server is listening on port(' + app.get('port') + ')');
});
