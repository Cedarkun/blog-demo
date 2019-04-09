const express = require('express'),
path =require('path'),
http = require('http'),
//session = require('express-session'),
//FileStore = require('session-file-store')(session),
bodyParser = require('body-parser'),
app = express();

/*
//define views directory
app.set('views', path.join(__dirname, '../client/build')); //client/build
//define a customized render engine
app.engine('.html', require('ejs').renderFile);
//using this engine
app.set('view engine', 'html');
*/
app.use(express.static(path.join(__dirname,'../client/build')));

app.use('/index',(req,res,next)=>{
    //res.render('index');
    res.sendFile(path.join(__dirname, '../client/build/index.html'));        
});

app.use((req,res,next)=>{
    let err = new Error('No found');
    err.status = 404;
    next(err);//find error handle directly
})


// error handler
app.use((err, req, res, next)=>{
    // set locals, only providing error in development
    res.locals.message = err.message;
    //req.app save reference to the instance of the Express using middleware
    res.locals.error = req.app.get('env') === 'development' ? err : {};//online production

    // render the error page
    res.status(err.status || 500);
    //res.render('error');
    res.sendFile(path.join(__dirname, '../client/build/error.html')); 
});

const server= http.createServer(app);
server.listen(200);
 
