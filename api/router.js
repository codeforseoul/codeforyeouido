//var express = require('express')
var view = require('./controller/page'),
    search = require('./controller/search'),
    user = require('./controller/user');
    manage_img = require('./controller/manage_img');

module.exports = function(app, config){
    //page
    app.get('/', view.home);
/*
    app.get('/keyword/:keyword', view.keyword)
    app.get('/persong/:name', view.person)
    */
}
