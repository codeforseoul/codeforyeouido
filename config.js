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
            api: __dirname + '/api',
        },
    }

}
