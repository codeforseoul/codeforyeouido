var img_manager = require('./manage_img.js'),
    async = require('async')


///////////////////////////////////////////
function imageUpload2redirect(req, res, result_cb){
    async.waterfall([
        function(callback){
            callback(null, req.files.image);
        },
        img_manager.upload    //upload image to server
        //TODO: search
    ], function(err, result){
        if(err){
            result_cb(err, res);
        }
        else{
            result.keyword = req.body.keyword;
            result.type = req.body.type;
            result.category = req.body.category;
            result_cb(null, res, result);
        }
    });
}

function result_cb(err, res, result){ 
    if(err){
        res.redirect('/notfound');
    }
    else{
        res.redirect('/search_result?' + make_query_str(result));
    }
}

function make_query_str(r){
    q = "";
    switch(r.type){
    case 'combination':
        q = 't=' + r.type + '&c=' + r.category + '&i=' + r.img_key + '&k=' + r.keyword;
        break;
    case 'image':
        q = 't=' + r.type + '&c=' + r.category + '&i=' + r.img_key;
        break;
    case 'keyword':
        q = 't=' + r.type + '&c=' + r.category + '&k=' + r.keyword;
        break;
    case 'error':
        //TODO
        break;
    }

    return q;
}

exports.route = function(req, res){
    switch(req.body.type){
        case 'combination':
        case 'image':
            imageUpload2redirect(req, res, result_cb);
            break;
        case 'keyword':
            var result = {}
            result.keyword = req.body.keyword;
            result.category = req.body.category;
            result.type = req.body.type;
            result_cb(null, res, result);
            break;
        default:
            res.json( {result: false, msg: 'Invalid Request'} );
    }
};
