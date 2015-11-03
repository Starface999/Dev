// require express framework and additional modules
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  ejs = require('ejs'),
  mongoose = require('mongoose');

  var User = require('./models/user');

  var session = require('express-session');

// middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/simple-login');
// set session options
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SuperSecretCookie',
  cookie: { maxAge: 60000 }
}));



// A create user route - creates a new user with a secure password
app.post('/users', function (req, res) {
	  console.log(req.body)
	  User.createSecure(req.body.email, req.body.password, function (err, user) {
	    req.session.userId = user.id;
	    res.json(user);
	  });
});

// user submits the login form
app.post('/login', function (req, res) {
  // call authenticate function to check if password user entered is correct
  console.log(req.body);
  User.authenticate(req.body.email, req.body.password, function (err, user) {
		req.session.userId = user.id;
		res.json(user);
	});
});

//login route (renders signup view)
app.get('/signup', function (req, res) {
  res.render('signup');
});

// login route with placeholder response
app.get('/login', function (req, res) {
	req.session.userId = user.id;
	res.render('login');
});

// logout route
app.get('/logout', function (req, res) {
	req.session.userId = null;
	req.user=null;
	res.render('login');
});

// user profile page
app.get('/profile', function (req, res) {
  // finds user currently logged in
  User.findOne({_id: req.session.userId}, function (err, user) {
    res.render('user-show.ejs', {user: user});
  });
});

// finds user currently logged in based on `session.userId`
app.use('/', function (req, res, next) {
  req.currentUser = function (callback) {
    User.findOne({_id: req.session.userId}, function (err, user) {
      if (!user) { callback("No User Found", null); }
      req.user = user;
      callback(null, user);
    });
  };

  next();
});

// listen on port 3000
app.listen(3000, function () {
  console.log('server started on locahost:3000');
});

module.exports = User;