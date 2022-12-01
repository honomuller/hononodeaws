var express = require('express')

var db = require('../database');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('employee',{
        title:"Employee dashboard"
    })
});

module.exports = router;
