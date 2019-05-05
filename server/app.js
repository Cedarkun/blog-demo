const path = require('path'),
    express = require('express'),
    app = express();
const webpack = require('webpack'),
    config = require('../webpack.config'),
    server =require('http').createServer(app),
    compiler = webpack(config);


app.use(express.static(path.join(__dirname,'../client/build')));

app.use(require('webpack-dev-middleware')(compiler, {
    //是否向控制台显示任何内容 
    noInfo: false,
    //绑定中间件的公共路径,与webpack配置的路径相同
    publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use('*',(req,res,next)=>{
    //res.render('index');
    res.sendFile(path.join(__dirname, '../client/build/index.html'));        
});


server.listen(200,(err)=>{
    console.log('Listening at :200');
})
