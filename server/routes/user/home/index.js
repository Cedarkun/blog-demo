var express = require('express');
var router = express.Router();
var load = require('./load');

router.get('/',function (req,res){
    if(req.session.user){
        req.session.cookie.expires = new Date(Date.now() + 60 * 60 * 1000) ;//刷新session持续时间
        var user=req.session.user;
        load.load_index(req,res,user);
    } 
    else{
        load.load_passenger(req,res,{id:-1});
        //res.send('你还没有登录，先登录下再试试！');
    }
});
router.post('/loadMore',function (req,res){
    var start = req.body.start;
    if(req.session.user){
        req.session.cookie.expires = new Date(Date.now() + 60 * 60 * 1000) ;//刷新session持续时间
        var user=req.session.user;
        load.load_indexMore(req,res,user.id,start);
    } 
    else{
        load.load_indexMore(req,res,1,start);//1为默认访问id
        //res.send('你还没有登录，先登录下再试试！');
    }
});
module.exports = router;