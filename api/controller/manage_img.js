var fs = require('fs'),
    easyimage = require('easyimage'),
    config = require('../../config.js')['development'], // TODO: auto select
    policy = require('../policy.js')

function make_thumbnail(saved_name, callback){
    easyimage.resize({
        src: config.path.fullsize_image + saved_name,
        dst: config.path.thumbnail_image + saved_name,
        width: 250,
        height: 250
    }, function(err, img){
        console.log("a");
        callback(err, {img_key: saved_name});
    });
}

exports.upload = function(image, callback){
    chk =  policy.valid_uploadImage(image);
    
    if(!chk.result){
        chk.err_process = 'image';
        callback( chk );
    }
    else {
        var name = image.nage;
        var saved_name = (new Date()).getTime() + '.jpg';
        var tmp_path = image.path;

        fs.readFile(tmp_path, function(err, data){
            if(err){
                callback({result: false, msg: 'file upload fail'});
                return;
            }
            fs.writeFile(config.path.fullsize_image + saved_name, data, function(err){                
                if(err){
                    callback({result: false, msg: 'file upload fail'});
                    return;
                }
                else{
                    callback(err, {img_key: saved_name});
                    make_thumbnail(saved_name, callback);
                }
            });
        });
    }
}

exports.fullsize = function(req, res){
    var imgkey = req.params.imgkey;

    var img = fs.readFile(config.path.fullsize_image + imgkey, function(err, data){
        if(err){
            res.redirect('/notfound');
        }
        else{
            res.end(data);
        }
    });
}

exports.thumb = function(req, res){
    var imgkey = req.params.imgkey;

    res.end('not implemented');
}
