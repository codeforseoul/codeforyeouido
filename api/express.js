var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    multiparty = require('connect-multiparty');

module.exports = function(app, config){
    //create server
    var server = http.createServer(app);
    
    //view model
    app.use(express.static(config.path.view));
    app.set('views', config.path.view);
    app.set('view engine', 'ejs');

    //express server environment setting
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(multiparty());

    var allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        
        if ('OPTIONS' == req.method) {
            res.send(200);
        }
        else {
            next();
        }
    };
    
    app.use(allowCrossDomain);
};
