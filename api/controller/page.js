var contentPage_path = 'content/'

exports.home = function(req, res) {
	return res.render('home.ejs', {
		item1 : "hello world",
		item2 : "item2",
		item3 : "item3",
		item4 : "item4",
		item5 : "item5",
		item6 : "item6"
	});
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
