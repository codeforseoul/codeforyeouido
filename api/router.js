var view = require('./controller/page');
var search= require('./controller/search');

module.exports = function(app, config){
    //index
    app.get('/', search.home);
    
    //searching
    /*
    app.get('/timeline', view.timeline)
    app.get('/keyword', search.keyword_all)
    app.get('/keyword/:keyword', search.keyword)
    app.get('/name', search.name_all)
    app.get('/name/:name', search.name)
    */
}
