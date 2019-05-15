var mysql = require('../../mysql'); 

function load_indexMore (req, res, id, start){
    //var path = require('path'); 
    var values = [id,start]; 
    var sql ="SELECT * FROM (SELECT * FROM article  WHERE authorID=? ORDER BY time DESC LIMIT ?,5)AS TEMPA LEFT JOIN \
    (SELECT articleID, Count(articleID) AS commentCount FROM comment GROUP BY articleID)AS TEMPB ON TEMPA.id = TEMPB.articleID;";
    //"SELECT * FROM article  WHERE authorID = ?  ORDER BY time DESC LIMIT ?,3";

    mysql.search(sql,values,function(){
        if(arguments[0] === 1)
        {
            for(var i = 0; i<arguments[1].length; i++)
            {
                arguments[1][i].abstract = escape(arguments[1][i].abstract);
                arguments[1][i].text = escape(arguments[1][i].text);
            }
            res.send(arguments[1]);
        } 
        if(arguments[0] === 0)
        {
            res.send("0");//没有查找传入空
        }
    }) ;  
    
};
exports.load_indexMore = load_indexMore; 


function load_index (req, res, user_info, pass){
    //var path = require('path'); 
    if(pass === undefined) pass={};
    var values = [user_info.id]; 
    var sql ="SELECT * FROM (SELECT * FROM article  WHERE authorID=? ORDER BY time DESC LIMIT 0,5)AS TEMPA LEFT JOIN \
    (SELECT articleID, Count(articleID) AS commentCount FROM comment GROUP BY articleID)AS TEMPB ON TEMPA.id = TEMPB.articleID;";
    //"SELECT * FROM article  WHERE authorID = ?  ORDER BY time DESC LIMIT 0,3";//

    mysql.search(sql,values,function(){
        if(arguments[0] === 1)
        {
            for(var i = 0; i<arguments[1].length; i++)
            {
                arguments[1][i].abstract = escape(arguments[1][i].abstract);
                arguments[1][i].text = escape(arguments[1][i].text);
            }
            res.render('home',{results:arguments[1],user:user_info, pass:pass});
        } 
        if(arguments[0] === 0)
        {
            res.render('home',{results: "", user:data,id:id});//没有查找传入空
        }

    }) ;  
    
};
exports.load_index =load_index;


function load_passenger(req, res, pass){
 
    var sql = "SELECT * FROM user WHERE id = 1";//默认访问id1
    mysql.query(sql,function(){
        if(arguments[0] === 1) 
        { 
           load_index(req, res, arguments[1][0], pass);
        }
        if(arguments[0] === 0) res.send("fail");
    }) ; 
};
exports.load_passenger=load_passenger;
