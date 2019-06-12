const express = require('express'),
    router=express.Router(),
    mysql = require('./mysql'),
    util = require('./util');

router.post('/login',function(req,res){
    let {userName, passWord} = req.body;
    passWord=util.md5(passWord + util.MD5_SUFFIX)

    let sql="SELECT * FROM USER WHERE NAME='"+userName+"' AND "+ " PASSWORD='"+passWord+"'";
        //"SELECT * FROM ? WHERE authorID = ?  ORDER BY time DESC LIMIT 0,3";//

    mysql.query(sql,null,function(err, rows){
        if (err)
        {
            util.responseClient(res);
        }
        else if(rows.length === 0)
        {
            util.responseClient(res,400,1,'fail');
        }
        else
        {
            let data = {};
            data.username = rows[0].name;
            data.userType = 'adiministrator'
            //登录成功后设置session
            req.session.userInfo = data;
            util.responseClient(res, 200, 0, 'success',data);
                //util.responseClient(res);
        } 
    
    }) ;  
});


module.exports=router;
