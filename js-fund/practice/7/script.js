// ------------------------------------------
// 1 -
// ------------------------------------------
function cakes(array) {
	var money = +array[0],
		cakes = array.slice(1, array.length).map(Number),
		cakeCount = 0;
		maxCakes = 0;

	for (var i = 0; i < cakes.length; i += 1) {
		cakeCount = money / cakes[i] | 0;
		if (maxCakes <= cakeCount) {
			maxCakes = cakeCount;
		}
	}
		
	console.log(money, cakes);
	console.log(maxCakes);
}

cakes([ '110', '13', '15', '17' ]);

// ------------------------------------------
// 2 -
// ------------------------------------------

// ------------------------------------------
// 3 - 
// ------------------------------------------

// ------------------------------------------
// 4 - 
// ------------------------------------------
