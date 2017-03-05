// ++++++++++++++++++++++++++++++++++++++++++
// 1 - Powers
// ++++++++++++++++++++++++++++++++++++++++++
function powers(array) {
	var nk = array[0].split(" ").map(Number),
		numberCount = nk[0],
		transformCount = nk[1],
		numbers = array[1].split(" ").map(Number);
		
	function transformArray(array) {
		var len = array.length,
			result = new Array(len),
			previous = 0,
			next = 0;
		for (var i = 0; i < len; i += 1) {
			previous = i - 1;
			next = i + 1;
			if (i === 0) {
				previous = len - 1;
			}
			if (i === len - 1) {
				next = 0;
			}
			
			if (array[i] === 0) {
				result[i] = Math.abs(array[previous] - array[next]);
			} else if (array[i] % 2 === 0 && array[i] !== 0) {
				result[i] = Math.max(array[previous], array[next]);
			} else if (array[i] === 1) {
				result[i] = array[previous] + array[next]
			} else if (array[i] % 2 === 1 && array[i] !== 1) {
				result[i] = Math.min(array[previous], array[next]);
			}
		}
		return result;
	}
	
	for (var i = 1; i <= transformCount; i += 1) {
		numbers = transformArray(numbers);
	}
		
	console.log(numbers.reduce((x,y) => x + y));
}

/* powers([ '5 1', '9 0 2 4 1' ]);
console.log("----------------------");
powers([ '10 3', '1 9 1 9 1 9 1 9 1 9' ]);
console.log("----------------------");
powers([ '10 10', '0 1 2 3 4 5 6 7 8 9' ]); */



// ------------------------------------------
// 2 - Chess moves - ? ? ? ? ? ? ? ? ? ? ? ? ?
// ------------------------------------------
function chessMoves(array) {
	var rows = +array[0],
		cols = +array[1],
		initialPos = array.splice(2, rows),
		moves = array.slice(3, array.length),
		letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
		matrix = [],
		pieces = [];
		
	// build matrix
	for (var i = 0; i < rows; i += 1) {
		matrix.unshift([]);
		for (var j = 0; j < cols; j += 1) {
			matrix[0].push({ name:letters[j] + (i+1), piece: "none"});
		}
	}
	
	// update pieces
	for (var i = 0; i < initialPos.length; i += 1) {
		for (var j = 0; j < initialPos[i].length; j += 1) {
			if (initialPos[i][j] !== "-") {
				matrix[i][j].piece = initialPos[i][j];
			}
		}
	}
	
	// get coords
	function getCoords(tile) {
		for (var i = 0; i < rows; i += 1) {
			for (var j = 0; j < cols; j += 1) {
				if (matrix[i][j].name === tile) {
					return [i, j];
				}
			}
		}
	}
	
	function attemptMove(str) {
		var startPos = getCoords(str.split(" ")[0]),
			endPos = getCoords(str.split(" ")[1]),
			startTile = matrix[startPos[0]][startPos[1]],
			endTile = matrix[endPos[0]][endPos[1]],
			straightMove = startPos[0] === endPos[0] || startPos[1] === endPos[1],
			diagonalMove = startPos[0] - endPos[0] === startPos[1] - endPos[1],
			clearPath = true,
			result = "no";
		
		
		
		if (endTile.piece === "none" && clearPath) {
			if (startTile.piece === "R" && straightMove) {
					result = "yes";
			} else if (startTile.piece === "B" && diagonalMove) {
					result = "yes";
			} else if (startTile.piece === "Q" && (straightMove || diagonalMove)) {
				result = "yes"
			} 
		}
		console.log(result);
	}
	for (var i = 0; i < moves.length; i += 1) {
		attemptMove(moves[i]);
	}
}

chessMoves([
'3',
'4',
'--R-',
'B--B',
'Q--Q',
'12',
'd1 b3',
'a1 a3',
'c3 b2',
'a1 c1',
'a1 b2',
'a1 c3',
'a2 b3',
'd2 c1',
'b1 b2',
'c3 b1',
'a2 a3',
'd1 d3'
]);
/* console.log("----------------------");
chessMoves([
'5',
'5',
'Q---Q',
'-----',
'-B---',
'--R--',
'Q---Q',
'10',
'a1 a1',
'a1 d4',
'e1 b4',
'a5 d2',
'e5 b2',
'b3 d5',
'b3 a2',
'b3 d1',
'b3 a4',
'c2 c5'
]); */

// ------------------------------------------
// 3 - 
// ------------------------------------------

// ------------------------------------------
// 4 - 
// ------------------------------------------
