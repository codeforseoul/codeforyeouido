module.exports = {
    development:{
        //server config
        port: 9999,

        //database
        db:{
            mongo:{
                url: 'localhost',
            },
        },

        //dir path
        path:{
            root: __dirname,
            view: __dirname + '/public',
            
            fullsize_image: __dirname + '/img/fullsize/',
            thunbnail_image: __dirname + '/img/thumbnail/',

            api: __dirname + '/api',
        },
    }

}
