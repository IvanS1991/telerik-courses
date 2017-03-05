// ------------------------------------------
// 1 - Pockets
// ------------------------------------------
function pockets(array) {
	var numbers = array[0].split(/\s+/ig).map(Number),
		len = numbers.length,
		peaks = [],
		sum = 0;
	
	for (var i = 0; i < len; i += 1) {
		if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
			peaks.push(1);
		} else {
			peaks.push(0);
		}
	}
	
	for (var i = 0; i < len; i += 1) {
		if (peaks[i - 1] === 1 && peaks[i + 1] === 1) {
			sum += numbers[i];
		} 
	}
	
	console.log(sum);
}

/* pockets([
    "53 20 1 30 2 40 3 10 1"
]);
console.log("------------------------");
pockets([
    "53 20 1 30 30 2 40 3 10 1"
]);
console.log("------------------------");
pockets([
    "53 20 1 30 2 40 3 3 10 1"
]); */
// ------------------------------------------
// 2 - Game of trolls
// ------------------------------------------
function gameOfTrolls(array) {
	var field = array[0].split(/\s+/ig).map(Number),
		startPos = array[1].split(/;/ig),
		actions = array.slice(2, array.length),
		troll1 = {
			name : "Wboup",
			position : startPos[0].split(/\s+/ig).map(Number)
		},
		troll2 = {
			name : "Nbslbub",
			position : startPos[1].split(/\s+/ig).map(Number)
		},
		princess = {
			name : "Lsjtujzbo",
			position : startPos[2].split(/\s+/ig).map(Number)
		},
		board = [];
		
	function drawBoard() {
		for (var i = 0; i < field[0]; i += 1) {
			board[i] = new Array(field[1]);
			for (var j = 0; j < field[1]; j += 1) {
				board[i][j] = "_";
			}
		};
		board[troll1.position[0]][troll1.position[1]] = troll1.name[0];
		board[troll2.position[0]][troll2.position[1]] = troll2.name[0];
		board[princess.position[0]][princess.position[1]] = princess.name[0];
		for (var i = 0; i < field[0]; i += 1) {
			console.log(board[i].join(" "));
		}
	};	
	
	function move(target, direction) {
		if (direction === "u") {
			target.position[0] > 0 ? target.position[0] -= 1 : target.position[0] = target.position[0];
		} else if (direction === "d") {
			target.position[0] !== (field[0] - 1) ? target.position[0] += 1 : target.position[0] = target.position[0];
		} else if (direction === "l") {
			target.position[1] > 0 ? target.position[1] -= 1 : target.position[1] = target.position[1];
		} else if (direction === "r") {
			target.position[1] !== (field[1] - 1) ? target.position[1] += 1 : target.position[1] = target.position[1];
		}
		console.log("-------------");
		console.log("Moving " + target.name + " to " + target.position);
		console.log("-------------");
		drawBoard();
	}
	
	function layTrap() {
		
	}
	
	drawBoard();
	
	for (var i = 0; i < actions.length; i += 1) {
		if (actions[i] === "lay trap") {
			layTrap();
		} else {
			actions[i] = actions[i].split(/\s+/ig);
			if (actions[i][0] === "mv") {
				actions[i][1] === "Lsjtujzbo" ? move(princess, actions[i][2]) : (actions[i][1] === "Wboup" ? move(troll1, actions[i][2]) : move(troll2, actions[i][2]));
			}
		}
	}
}

/* gameOfTrolls([
    '5 5',
    '1 1;0 1;2 3',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Wboup r',
    'mv Wboup r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d'
]); */
/* console.log("-------------------------");
gameOfTrolls([
    '7 7',
    '0 1;0 2;3 3',
    'mv Lsjtujzbo l',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup l',
    'mv Wboup l',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Nbslbub d',
    'mv Lsjtujzbo d',
    'mv Lsjtujzbo l',
    'mv Lsjtujzbo l',
    'mv Nbslbub l',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup r',
    'mv Lsjtujzbo d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r'
]);
console.log("-------------------------");
gameOfTrolls([
    '8 8',
    '1 3;0 3;5 5',
    'mv Lsjtujzbo l',
    'mv Lsjtujzbo l',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Wboup r',
    'mv Wboup r',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Lsjtujzbo l',
    'mv Nbslbub d',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d'
]); */
// ------------------------------------------
// 3 - Otp-adaScript
// ------------------------------------------
function otpAdaScript(array) {
}

otpAdaScript([
    '<Fruit>',
    '  Apple;',
    '  Banana;',
    '  Pineapple;',
    '</>',
    '<Vegetable>',
    '  Cucumber = 1;',
    '  Cabage;',
    '</>'
]);
/* console.log("---------------------------");
otpAdaScript([
    '<@Languages>',
    '   CSharp;',
    '   JavaScript;',
    '   Haskell = 42;',
    '   Rust = 4;',
    '   CPP;',
    '</>',
    '<Result>',
    '   Failed;',
    '   Passed;',
    '   Excellence;',
    '</>',
    '<@Insects>',
    '   Ant;',
    '   Mosquito = 2;',
    '</>'
]); */
// ------------------------------------------
// 4 - 
// ------------------------------------------
