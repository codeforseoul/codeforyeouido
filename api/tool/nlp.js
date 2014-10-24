var pos = require('pos'),
    policy = require('../policy');

function pos_tagger(str){
    var words = new pos.Lexer().lex(str);
    var taggedWord = new pos.Tagger().tag(words);

    return taggedWord
}

function handle_query(str){
    var result = []
    var words = pos_tagger(str);

    for(i in words){
        var taggedWord = words[i];

        var word = taggedWord[0];
        var tag = taggedWord[1];

        //TODO:
        if( !policy.is_stopword(word) && !policy.is_stoptag(tag) ){
            result.push(taggedWord);
        }
    }

    return result
}


exports.pos_tagger = pos_tagger;
exports.handle_query = handle_query;
