// ------------------------------------------
// 1 -
// ------------------------------------------
function vehicles(array) {
	var wheels = +array[0],
		trucks = wheels / 10 | 0,
		cars = (wheels - trucks*10) / 4 | 0,
		trikes = (wheels - cars*4) / 3 | 0;
	
	
	
	// cars - 4 wheels
	// trucks - 10 wheels
	// trikes - 3 wheels
	
	console.log(wheels);
	console.log("Cars: " + cars);
	console.log("Trucks: " + trucks);
	console.log("Trikes: " + trikes);
	
}

vehicles(['7']);
console.log("------");
vehicles(['10']);
console.log("------");
vehicles(['40']);


// ------------------------------------------
// 2 -
// ------------------------------------------

// ------------------------------------------
// 3 - 
// ------------------------------------------

// ------------------------------------------
// 4 - 
// ------------------------------------------
