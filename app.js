var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileupload = require('express-fileupload');

var bodyparser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mauRouter = require('./routes/mau');
var uploadfileRouter = require('./routes/uploadfile');
var crudRouter = require('./routes/crud');
var sanphamRouter = require('./routes/product');
var homeRouter=require('./routes/home');
var nccRouter=require('./routes/ncc');
var userRouter = require('./routes/user');
var app = express();

app.use(fileupload());
app.use(bodyparser.urlencoded({ extended: false }));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/upload', express.static('upload'));

app.use(
    cors({
        origin: '*',
        allowedHeaders: ['Content-Type', 'Authorization'],
        allowedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    }),
);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/uploadfile', uploadfileRouter);
app.use('/loaisp', crudRouter);
app.use('/sanpham',sanphamRouter);
app.use('/home',homeRouter);
app.use('/ncc',nccRouter);
app.use('/user',userRouter);
app.use('/mau', mauRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
