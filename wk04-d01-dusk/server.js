// pull in mongoose module with require
var mongoose = require('mongoose');

// connect to the mongoose database, `console` collection
mongoose.connect('mongodb://localhost/console');

// giving mongoose.Schema a shorter name for convenience
var Schema = mongoose.Schema;

// set up the videogame console schema
/*  Posts Schema */
var postsSchema = new Schema({
    name: String,
    content: String,
});
/*  Comments Schema */
var commentsSchema = new Schema({
    name: String,
    content: String,
    // I'm telling consoles to EXPECT references to Console documents
    post: [{type: Schema.Types.ObjectId, ref: 'Posts'}]
});

/* Compiling models from the above schemas */
var Posts = mongoose.model('Posts', postsSchema);
var Comments = mongoose.model('Comments', commentsSchema);

/* make a new Posts document */
var post166 = new Posts ({
 name: 'post166',
 content: 'One thing I will say about the drought: at least it is warm all the time!',
 comments: []
});

/* make a new Game document */
var comment1Post166 = new Comments ({
  name: 'comment1Post166',
  content: 'Whaaaaat? That is terrible!',
});

comment1Post166.save(function(err, firstComment) {
 if(err) {return console.log(err);}
 else console.log(firstComment);
});
post166.comments.push(comment1Post166);
post166.save();

console.log(Posts);


