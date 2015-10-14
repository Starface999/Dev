  // server.js
  // SERVER SIDE JAVASCRIPT
  var express = require('express');
  var app = express();
  var subject = "Urban hacking";
  var imgLink = "https://static1.squarespace.com/static/55886c50e4b093e7d30b92be/t/55f9aed9e4b0a8e078bd618a/1442426586255/?format=1000w";
  var events = [
    { title: 'Grain Silo Movie Night', artist: 'The Embassy', imgUrl: "https://static1.squarespace.com/static/55886c50e4b093e7d30b92be/t/55f9aed9e4b0a8e078bd618a/1442426586255/?format=1000w" },
    { title: 'Outside Outside Lands', artist: 'Nookzy', imgUrl: "https://static1.squarespace.com/static/55886c50e4b093e7d30b92be/t/5597103be4b07172a3059714/1435963454490/?format=1000w" },
    { title: 'Treasure Island Movie Night', artist: 'Spontaneum', imgUrl: "https://static1.squarespace.com/static/55886c50e4b093e7d30b92be/t/55f9ae92e4b083250657947f/1442426521860/?format=1000w"}
    ];

  app.set('view engine', 'ejs');

  app.use(express.static('public'));

  app.get('/', function (req, res) {
    res.render('index', { img: imgLink });
  });

  var server = app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening at http://localhost:3000/');
  });