module.exports = {
    //server config
    port: 8080,

    //database
    db:{
       mysql: {
            host: 'localhost',
            user: 'root',
            password: 'codeforseoul',
            database: 'codeforyeouido'
        }
    },

    //dir path
    path:{
        root: __dirname,
        view: __dirname + '/public',
        api: __dirname + '/api',
    },
}
