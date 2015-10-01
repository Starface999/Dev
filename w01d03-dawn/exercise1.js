var x = prompt("how many bottles of beer are on the wall?", "#");

for(x=x; x>0; x-=1) {
	console.log(x + " bottles of beer on the wall, " + x + " bottles of beer! Take one down and pass it around, " + (x-1) + " bottles of beer on the wall!");
}
console.log("No more bottles of beer on the wall, no more bottles of beer! Take one down and pass it around, no more bottles of beer on the wall!");