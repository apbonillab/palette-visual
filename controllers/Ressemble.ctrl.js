'use strict'
var express = require('express')
var router = express.Router();
var model = require('../services/execution.srv.js');

router.post('/compare',function(req,res){
    model.compare( function(info){
        res.statusCode = 200;
        res.send({ status: info });
    },function(err){
        res.statusCode = 404;
        res.send(err);
        
    })
  
    return res;
});

module.exports = router;