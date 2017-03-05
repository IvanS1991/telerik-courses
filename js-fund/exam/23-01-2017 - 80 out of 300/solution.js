//-----------------------------
// 1
//-----------------------------
function rabbitJump(array) {
	var nCount = +array[0],
		numbers = array.slice(1, array.length).map(Number),
		index = 1,
		jumping = true,
		currentResult = +numbers[index-1];
	
	while (index < nCount) {
		if (numbers[index] % 2 === 1) {
			currentResult *= +numbers[index];
			index += 1;
		} else {
			currentResult += +numbers[index];
			index += 2;
		}
		currentResult %= 1024;
	}
	console.log(currentResult);
}

/* rabbitJump([
  '10',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0'
]);
console.log("-------------");
rabbitJump([
  '9',
  '9',
  '9',
  '9',
  '9',
  '9',
  '9',
  '9',
  '9',
  '9'
]);
console.log("-------------");
rabbitJump([
  '7',
  '1',
  '3',
  '4',
  '6',
  '7',
  '9',
  '11'
]); */

//-----------------------------
// 2
//-----------------------------
function lost(array) {
	var rowCols = array[0].split(" "),
		rows = +rowCols[0],
		cols = +rowCols[1],
		currRow = (rows - 1) / 2,
		currCol = (cols - 1) / 2,
		field = array.slice(1, array.length).map(x => x.split(" ").map(Number)),
		isRunning = true,
		hasEscaped = false,
		visitedTiles = [];
			
	
	
	function returnBinary(number) {
		number = number.toString(2);
		while (number.length < 4) {
			number = "0" + number;
		}
		return number;
	}
	
	function checkTile(array, number) {
		return array.some(x => x === number);
	}
	
	function getTileAt(row, col) {
		return field[row][col];
	}
	
	function isValidMove(direction) {
		var tempRow = currRow,
			tempCol = currCol,
			result;
			
		if (direction === "up") {
			tempRow -= 1;
		} else if (direction === "down") {
			tempRow += 1;
		} else if (direction === "left") {
			tempCol -= 1;
		} else if (direction === "right") {
			tempCol += 1;
		}
		return checkTile(visitedTiles, getTileAt(tempRow, tempCol));
	}
	
	function move() {
		var currentTile = getTileAt(currRow, currCol),
			binaryPos = returnBinary(currentTile),
			validMoves = [false, false, false, false],
			directions = ['left', 'down', 'right', 'up'],
			currentDirection = "",
			moveIsValid = true;
		
		visitedTiles.push(currentTile);
		
		for (var i = binaryPos.length - 1; i >= 0; i -= 1) {
			if (binaryPos[i] === '1') {
				validMoves[i] = true;
			}
		}
		for (var i = validMoves.length - 1; i >= 0; i -= 1) {
			if (validMoves[i] === true) {
				currentDirection = directions[i];
				if (!isValidMove(currentDirection)) {
					break;
				}
				currentDirection = "";
			}
		}
		if (currentDirection === "up") {
			currRow -= 1;
		} else if (currentDirection === "down") {
			currRow += 1;
		} else if (currentDirection === "right") {
			currCol += 1;
		} else if (currentDirection === "left") {
			currCol -= 1;
		} else {
			isRunning = false;
		}
		
		if (currRow === 0 || currCol === 0) {
			hasEscaped = true;
		}
		
		if (isRunning && hasEscaped) {
			console.log("No rakiya, only JavaScript " + currRow + " " + currCol);
		} else if (!isRunning) {
			console.log("No JavaScript, only rakiya " + currRow + " " + currCol);
		}
	}
	
	while (isRunning && !hasEscaped) {
		move();
	}
	
}

lost([
    '5 7',
    '9 5 3 11 9 5 3',
    '10 11 10 12 4 3 10',
    '10 10 12 7 13 6 10',
    '12 4 3 9 5 5 2',
    '13 5 4 6 13 5 6'
]);
console.log("------------");
lost([
    '7 5',
    '9 3 11 9 3',
    '10 12 4 6 10',
    '12 3 13 1 6',
    '9 6 11 12 3',
    '10 9 6 13 6',
    '10 12 5 5 3',
    '12 5 5 5 6'
]);
console.log("------------");

//-----------------------------
// 3
//-----------------------------
function minify(array) {
	var str = array.join("").replace(/\s*/ig, ""),
		regex = /[a-zA-Z0-9_]+/ig,
		currASCII = 96;
	
	
}

/* minify([
    'hello;',
    '{this; is',
    ' ; an;;;example;',
    '}',
    'of;',
    '{',
    'KONPOT;',
    '{',
    'Some_numbers;',
    '42;5;3}',
    '_}'
]);
console.log("-----------------------");
minify([
    '; ;;;jGefn4E5Pvq    ;;  ;  ; ;',
    'tQRZ5MMj26Ov { {    {;    ;;    5OVyKBFu7o1T2 ;szDVN2dWhex1V;1gDdNdANG2',
    ';    ;    ;  ;; jGefn4E5Pvq   ;;    ;p0OWoVFZ8c;;}    ;  ; ;',
    '5OVyKBFu7o1T2   ;  szDVN2dWhex1V ;    ;tQRZ5MMj26Ov    ;  ;   };',
    '1gDdNdANG2    ;   p0OWoVFZ8c ;  jGefn4E5Pvq ;; {;Z9n;;',
    ';1gDdNdANG2;   ;;    ;   ;jGefn4E5Pvq    ;; ;;p0OWoVFZ8c;;    ;;',
    ';',
    'tQRZ5MMj26Ov  ;',
    '{    ;szDVN2dWhex1V;   ;',
    ';   jGefn4E5Pvq   ;  ;  } }}'
]); */