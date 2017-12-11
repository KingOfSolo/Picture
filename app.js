var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

// var index = require('./server/api/index');
var user = require('./server/api/user')
var login = require('./server/api/login')
var photo = require('./server/api/photo')
var comment = require('./server/api/comment')

var app = express()


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieParser())
// app.use('/',index);
app.use('/user', user)
app.use('/login', login)
app.use('/photo', photo)
app.use('/comment', comment)

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
    /*让options请求快速返回*/
  } else {
    next();
  }
});
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.get('/' , function (req, res) {
  res.send('hello world');
});

app.listen(3000)

module.exports = app;

