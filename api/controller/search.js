var mysql = require('mysql'),
    async = require('async'),
    request = require('request'),

    config = require('../../config'),
    view = require('../../api/controller/page')

var pool = mysql.createPool(config.db.mysql)
var connection_g;

function timeline_query(callback_, keyword){
    connection_g.query(
            'select * from remark where doc like "%'+keyword+'%" order by doc_date desc limit 3;', 
            [], 
            function(err, result){
                cnt = 0;
                if(err){ callback_(null,[]); }
                else{
                                callback_( null,  result  ) 
        /*
                    for(var i=0; i<result.length; i++){
                        request('http://api.popong.com/v0.1/person/'+result[i].person_id+'?api_key=test',
                        function(err, response, body){
                            a = JSON.parse(body);
                            cnt++;

                            if(cnt<result.lengt){

                            }
                        });
                    }
                    */
                } 
            }
    );
}

exports.home = function(req, res){
    pool.getConnection(function(err, connection){
        connection_g = connection;
        // TODO: dynamic db fetching query
        async.parallel([
            function(callback){ timeline_query(callback, '부동산') },
            function(callback){ timeline_query(callback, '밥 먹고' )},
            function(callback){ timeline_query(callback, '귀찮아' )},
            function(callback){ timeline_query(callback, '세월호' )},
            function(callback){ timeline_query(callback, '안전')},
            function(callback){ timeline_query(callback, '빨리해' )}
        ], function(err, results){
            view.home(req, res, results);
        });
    });
}


/* TODO: 
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
}*/
