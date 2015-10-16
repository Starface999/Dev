var express = require("express");
var app = express();

// SOLUTION HERE

app.get("/pick-a-color/:color", function (req, res) {
    res.send( "You picked " + req.params.color );
});

var color = request.params.color;

var port = 3000;
app.listen(port, function(){
  console.log("Server Running at localhost:3000/");
});