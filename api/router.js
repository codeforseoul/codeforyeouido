//var express = require('express')
var view = require('./controller/page'),
    search = require('./controller/search'),
    user = require('./controller/user');
    manage_img = require('./controller/manage_img');

module.exports = function(app, config){
    /*var router = express.Router();

    router.use(function(req, res, next){
        next();
    });*/

    //page
    app.get('/', view.home);
    app.get('/search', view.search);
    app.get('/search_result', view.search_result);
    app.get('/login', view.login);
    app.get('/signin', view.signin);
    
    //error page
    app.get('/notexist', view.notexist);
    app.get('*', view.notexist);

    //resources
    app.get('/img/:imgkey', manage_img.fullsize);
    app.get('/img/thumb/:imgkey', manage_img.thumb);

    //api
    app.post('/api/search', search.route);
    app.post('/auth/signin', user.signin);
    app.post('/auth/login', user.login);
}
