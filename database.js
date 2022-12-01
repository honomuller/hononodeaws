var mysql = require('mysql')
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '8889',
    database: 'honodb'
});

db.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log('database connection successful');
    }
});

module.exports = db;

