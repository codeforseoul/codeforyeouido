var contentPage_path = 'content/'

exports.home = function(req, res, param) {
	return res.render('home.ejs', {results: param})
}

exports.timeline = function(req, res) {
	return res.render('timeline.ejs', {});
}

exports.keyword = function(req, res) {
	return res.render('keyword.ejs', {});
}

exports.name = function(req, res) {
	return res.render('name.ejs', {});
}
