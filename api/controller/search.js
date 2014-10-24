var mysql = require('mysql'),
    async = require('async')

    config = require('../../config'),
    view = require('../../api/controller/page')

var pool = mysql.createPool(config.db.mysql)

function connect_db(){

}

function disconnect_db(){

}

exports.keyword = function(req, res){  
    pool.getConnection(function(err, connection){
        if(err){
            res.send('a');
            return;
        }

        connection.query("SELECT * from test", [], function(err, result){
            if(err){
                res.send('b');
                return;
            }
            
            connection.release();
            res.send(result)
        })
    });
}

exports.keyword_all = function(req, res){
    view.keyword(req, res);
}

exports.keywrod = function(req, res){
    view.keyword(req, res);
}

exports.name_all = function(req, res){
    view.name(req, res);
}

exports.name = function(req, res){
    view.name(req, res);
}
