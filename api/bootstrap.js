var fs = require('fs'),
    path = require('path'),
    color = require('colors');

module.exports = function(app, config){
    require('./express')(app, config);
    require('./router')(app, config);
};
