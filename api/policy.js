//image
var valid_img_type = ['image/jpeg'];
var max_size = 5 * 1024 * 1024;

exports.valid_uploadImage = function(file){
    // undifined file type
    if( file.type === undefined )
        return { result: false, msg: 'Couldn\'t resolve file type' }

    // file type check
    if( valid_img_type.indexOf(file.type) < 0)
        return { result: false, msg: 'Invalid file format' };

    // file size check
    if( file.size > max_size )
        return { result: false, msg: 'Over valid file size(5MB)'}

    return {result: true}
}

//word
var stopTag = ['JJ'];
var stopWord = [];

exports.is_stopword = function(word){
    if( stopWord.indexOf(word) !== -1)
        return true;
    else 
        return false;
}
exports.is_stoptag = function(tag){
    if( stopTag.indexOf(tag) !== -1)
        return true;
    else
        return false;
}
