const express = require('express'),
    router=express.Router(),
    mysql = require('./mysql'),
    util = require('./util');

router.get('/getArticles',function(req,res){
    let{navitem, curTag, startId, postsCount}= req.query;
    navitem=navitem==='home'?'article':navitem;
    startId=parseInt(startId);
    postsCount=parseInt(postsCount);
    values =[startId,postsCount];

    let sql=curTag==='全部'?"SELECT * FROM "+navitem+" ORDER BY time DESC LIMIT ?,?":"SELECT * FROM "+navitem+" WHERE TAG='"+curTag+"' ORDER BY time DESC LIMIT ?,?";

    mysql.query(sql,values,function(err, rows){
        if (err)
        {
            util.responseClient(res);
        }
        else
        {
            if(rows.length==0){
                util.responseClient(res, 200, 1, 'get posts end');
                return;
            }
            for(let i = 0; i<rows.length; i++)
            {
                arguments[1][i].abstract = escape(rows[i].abstract);
                arguments[1][i].text = escape(rows[i].text);
            }
            util.responseClient(res, 200, 0, 'get posts success', rows);
            //util.responseClient(res);
        } 

    }) ;   
});

router.get('/getTags',function(req,res){
    let sql = 'SELECT DISTINCT tag FROM article';

    mysql.query(sql,null,function(err, rows){
        if (err)
        {
            util.responseClient(res);
        }
        else
        {
            let responseData=['全部'];
            for(let i = 0; i<rows.length; i++)
            {
                responseData.push(rows[i].tag);
            }
            util.responseClient(res, 200, 0, 'get tags success', responseData);
            //util.responseClient(res);
        } 

    }) ;  
});

module.exports=router;
