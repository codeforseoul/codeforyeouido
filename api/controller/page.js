var os = require('os');
var _path = 'contentPage/';

var contentPage_path = 'contentPage/'


//TODO: from DB
var categories = ['mysql.row1', 'mysql.row2', 'mysql.row3'];

exports.home = function(req, res){
    params = {
        name: 'home',
        page_header: {
            chk: true,
            title: "Sentiment",
            sub: "Search BGMs which are relevent to your image" +
                "<br>Create page including image and bgm" +
                "<br><u>Share</u> it to your friends",
        },
        user_cnt: 100,
        bgm_cnt: 231,
        page_cnt: 124213,
    };
    return res.render('home.ejs', params);
}

function show_contentPage(res, params){
    res.render('layout.ejs', params);
}

/*
 * Search page
 * --------------------------------------*/
exports.search = function(req, res){
    params = {
        name: 'search',
        page_header: {chk: false},

        content_page: contentPage_path + 'search.ejs',

        categories: categories,
        
        type: 'combination'
    }
    show_contentPage(res, params);
}

exports.search_result = function(req, res){
    params = {
        name: 'search',
        page_header: {chk:false},
        
        content_page: contentPage_path + 'search_result.ejs',

        categories: categories,

        type: req.query.t,
        keyword: req.query.k,
        category: req.query.c,
        image_key: req.query.i
    }
    show_contentPage(res, params);
}

/*
 * User Access Page
 * --------------------------------------*/
exports.login = function(req, res){
    params = {
        name: 'login',
        page_header: {
            chk: true,
            title: "Login....",
            sub: "Login Please"
        },

        content_page: contentPage_path + 'login.ejs',
    }
    show_contentPage(res, params);
}
exports.signin = function(req, res){
    params = {
        name: 'signin',
        page_header: {
            chk: true,
            title: "Sign in....",
            sub: "Welcome"
        },


        content_page: contentPage_path + 'signin.ejs',
    }
    show_contentPage(res, params);
}

/*
 * Common Page
 * --------------------------------------*/
exports.notexist = function(req, res){
    params = {
        name: '404',
        page_header: {chk:false},
        content_page: contentPage_path + 'notfound.ejs',
    }
    show_contentPage(res, params);
}

