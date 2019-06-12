const path = require('path'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    FileStore = require('session-file-store')(session);
const webpack = require('webpack'),
    config = require('../webpack.config'),
    server =require('http').createServer(app),
    compiler = webpack(config);
const home = require('./routes/home');
    userInfo = require('./routes/userInfo'); 
    mysql = require('./routes/mysql');
    util = require('./routes/util');

//app.use(express.static(path.join(__dirname,'../client/build')));
app.use('/',express.static(path.join(__dirname,'../client/build')));
app.use(bodyParser.urlencoded({  
    extended: true  
})); 
app.use(bodyParser.json());

app.use(session({
    name: 'skey',
    secret: 'chyingp',  // 用来对session id相关的cookie进行签名
    store: new FileStore(),  // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
    resave: false,  // 是否每次都重新保存会话，建议false
    cookie: {
        maxAge:  60 * 60 * 1000  // 有效期，单位是毫秒
    }
}));

app.use(require('webpack-dev-middleware')(compiler, {
    //是否向控制台显示任何内容 
    noInfo: false,
    //绑定中间件的公共路径,与webpack配置的路径相同`
    publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use('/', home);
app.use('/user',userInfo)


/*
app.get('/getArticles',function (req,res){
    
    let navitem=req.query.navitem==='home'?'article':req.query.navitem;
    let startId=parseInt(req.query.startId);
    let postsCount=parseInt(req.query.postsCount);
    let values = [startId,postsCount];

    let sql = 'SELECT * FROM '+navitem+' WHERE authorID=1 ORDER BY time DESC LIMIT ?,?';
    //"SELECT * FROM ? WHERE authorID = ?  ORDER BY time DESC LIMIT 0,3";//

    mysql.search(sql,values,function(){
        if(arguments[0] === 1)
        {
            for(let i = 0; i<arguments[1].length; i++)
            {
                arguments[1][i].abstract = escape(arguments[1][i].abstract);
                arguments[1][i].text = escape(arguments[1][i].text);
            }
            let responseData={posts:arguments[1]};
            util.responseClient(res, 200, 0, 'success', responseData);
        } 
        if(arguments[0] === 0)
        {
            util.responseClient(res, 200, 1, 'end');
        }

    }) ;   
});
*/

/*
app.use('*',(req,res,next)=>{
    //res.render('index');
    res.sendFile(path.join(__dirname, '../client/build/index.html'));        
});
*/

server.listen(200,(err)=>{
    console.log('Listening at :200');
})
