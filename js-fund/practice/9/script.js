// ------------------------------------------
// 1 -
// ------------------------------------------

// ------------------------------------------
// 2 - Joro the Naughty
// ------------------------------------------
function solve(args) {
	// args[0] - 'rows cols jumps'
	// args[1] - 'startRow startCol'
	// args[2]+ - jump 'vertical horizontal'
	var options = args[0].split(" ").map(Number),
		rows = options[0],
		cols = options[1],
		jumps = options[2],
		startingPos = args[1].split(" ").map(Number),
		moves = args.slice(2, args.length),
		board = [],
		rabbit = {
			position: startingPos,
			hasEscaped: false,
			tileSum: 0
		};
		
		
	// draw board
	function drawBoard() {
		for (var i = 0; i < rows; i += 1) {
			board.push([]);
			for (var j = 0; j < cols; j += 1) {
				board[i].push(j + 1 + i * cols);
			}
			console.log(board[i].join(" "));
		}
	}
	
	function updateBoard() {
		for (var i = 0; i < rows; i += 1) {
			for (var j = 0; j < cols; j += 1) {
				board[i][j] = (j + 1 + i * cols);
			}
			console.log(board[i].join(" "));
		}
	}
	
	// move rabbit
	function move(str) {
		var moves = str.split(" ").map(Number),
			vertical = moves[0],
			horizontal = moves[1];
		
		console.log("Old: " + rabbit.position[0] + " " + rabbit.position[1]);
		
		rabbit.position[0] += vertical;
		rabbit.position[1] += horizontal;
		
		console.log("New: " + rabbit.position[0] + " " + rabbit.position[1]);
		console.log("-----------------");
	}
	
	// test
	drawBoard();
	for (var line = 0; line < moves.length; line += 1) {
		move(moves[line]);
	}
}

solve ([
'6 7 3',
'0 0',
'2 2',
'-2 2',
'3 -1'
]);
// ------------------------------------------
// 3 - 
// ------------------------------------------

// ------------------------------------------
// 4 - 
// ------------------------------------------
