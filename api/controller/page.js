var contentPage_path = 'content/'

exports.home = function(req, res){
    return res.render('home.ejs', {});
}

exports.timeline = function(req, res){
    return res.render('timeline.ejs', {});
}

exports.keyword = function(req, res){
    return res.render('keywrod.ejs', {});
}

exports.name = function(req, res){
    return res.render('name.ejs', {});
}   
