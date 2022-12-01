var express = require('express')
const mysql = require('mysql')

var router =express.Router();
var db = require('../database');

router.get('/',function(request,response,next){
    var quer = "SELECT * FROM employee";
    db.query(quer, function(error,data){
        if(error){
            throw error
        }else{
            response.render('index',{
                title:"node app",
                sampleData:data  
        });
        }
    }); 
    // response.render('index',{'title':'hello nodejs'})
});

module.exports = router;
