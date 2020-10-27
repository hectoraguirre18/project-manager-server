const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressJwt = require('express-jwt');

const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const storiesRouter = require('./routes/stories');
const projectsRouter = require('./routes/projects');

const jwtKey = '8a6d7797d70e0a0580a8de35859d53f6';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressJwt({
  secret: jwtKey,
  algorithms: ['HS256']
}).unless({
  path: ['/auth/signup', '/auth/login']
}));

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/stories', storiesRouter);
app.use('/projects', projectsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
