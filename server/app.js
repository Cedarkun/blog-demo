import {responseClient} from '../util'

const path = require('path'),
    express = require('express'),
    app = express();
const webpack = require('webpack'),
    config = require('../webpack.config'),
    server =require('http').createServer(app),
    compiler = webpack(config);
const mysql = require('./routes/mysql');


//app.use(express.static(path.join(__dirname,'../client/build')));
app.use('/',express.static(path.join(__dirname,'../client/build')));

app.use(require('webpack-dev-middleware')(compiler, {
    //是否向控制台显示任何内容 
    noInfo: false,
    //绑定中间件的公共路径,与webpack配置的路径相同
    publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('/getArticles',function (req,res){
    
    let navitem=req.query.navitem==='home'?'article':req.query.navitem;
    let startId=req.query.startId;
    let postsCount=req.query.postsCount;
    let values = [navitem,startId,postsCount];

    let sql = 'SELECT * FROM ? WHERE authorID=1 ORDER BY time DESC LIMIT ?,?';
    //"SELECT * FROM ? WHERE authorID = ?  ORDER BY time DESC LIMIT 0,3";//

    mysql.search(sql,values,function(){
        if(arguments[0] === 1)
        {
            for(let i = 0; i<arguments[1].length; i++)
            {
                arguments[1][i].abstract = escape(arguments[1][i].abstract);
                arguments[1][i].text = escape(arguments[1][i].text);
            }
            let responseData={data:arguments[1]};
            responseClient(res, 200, 0, 'success', responseData);
        } 
        if(arguments[0] === 0)
        {
            responseClient(res);
        }

    }) ;   
});


/*
app.use('*',(req,res,next)=>{
    //res.render('index');
    res.sendFile(path.join(__dirname, '../client/build/index.html'));        
});
*/

server.listen(200,(err)=>{
    console.log('Listening at :200');
})
