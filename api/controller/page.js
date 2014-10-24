var contentPage_path = 'content/'

exports.home = function(req, res){
    param = {
        contentPage : contentPage_path + 'home.ejs'
    }

    return res.render('layout.ejs', param);
}
