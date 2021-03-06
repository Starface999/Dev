var express = require("express");
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get("/moar_cookie", function(req, res){
  res.cookie("wdi", 22);
  res.send("Check your cookies!");
  // res.send({json: "data"});
});

app.get("/sad_cookie", function(req, res){
  res.clearCookie("wdi", 22);
  res.send("Where did the cookie go?");
  // res.send({json: "data"});
});

app.get("/", function(req, res) {
  var count = parseInt(req.cookies.count) || 0;
  var new_count = count+1;
  res.cookie("count", new_count);
  res.send(new_count.toString());
});

app.listen(3000, function () {
  console.log("UP AND RUNNING");
});