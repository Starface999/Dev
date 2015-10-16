var express = require("express");
var app = express();

// SOLUTION HERE

app.get("/pick-a-color/:choice", function (req, res) {
    res.send( "You picked " + req.params.choice );
});

var choice = request.params.choice;

var port = 3000;
app.listen(port, function(){
  console.log("Server Running at localhost:3000/");
});