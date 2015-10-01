var tokens = 6; // Jimmy's tokens
var height = 5; //Jimmy's height
var age = 11; //Jimmy's age
var withAdult = false; //Jimmy is with an adult if true

// Can he ride?
if ( (tokens >= 5 && height >= 4 && age >= 12) ||  (tokens >= 5 && height >= 4 && age < 12 && withAdult === true) ) {
    console.log("Step right up!");
} else {
    console.log("Sorry, you can't ride");
}