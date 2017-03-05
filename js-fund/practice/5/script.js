// ------------------------------------------
// 1 -
// ------------------------------------------
function minMax(array) {
	var numberCount = +array[0],
		sequence = +array[1],
		numbers = array[2].split(/\s+/ig).map(Number),
		result = [],
		index = 0,
		endIndex = numbers.length - sequence,
		current;
		
	function findMinMax(array) {
		var min = array[0],
			max = array[0];
			
		for (var i = 0, len = array.length; i < len; i += 1) {
			if (min > array[i]) {
				min = array[i];
			}
			if (max < array[i]) {
				max = array[i];
			}
		}
		return [min, max]
	}
		
	while (index <= endIndex) {
		current = findMinMax(numbers.slice(index, index + sequence)),
		result.push(current[0] + current[1]);
		index += 1;
	}
	
	console.log(result.join(","));
}

/* minMax([
'4',
'2',
'1 3 1 8'
]);
console.log("-----------");
minMax([
'5',
'3',
'7 7 8 9 10'
]);
console.log("------------");
minMax([
'8',
'4',
'1 8 8 4 2 9 8 11'
]); */


// ------------------------------------------
// 2 -
// ------------------------------------------
function triathlon(array) {
	var str = array[0],
		offset = +array[1],
		letterCounter = 1,
		currentLetter = "",
		segment = str[0],
		segmentList = [],
		occurencies = [],
		alphabet = 'abcdefghijklmnopqrstuvwxyz',
		cypher = "",
		currentASCII = 0,
		result = "",
		encodingCouple,
		sum = 0,
		product = 1;
	
		
	function getASCIICouple(letter) {
		var replacement = 0;
		for (var i = 0, len = alphabet.length; i < len; i += 1) {
			if (letter === alphabet[i]) {
				replacement = cypher[i].charCodeAt();
				return [letter.charCodeAt(), replacement]
			}
		}
	}
		
	for (var i = 0, len = alphabet.length; i < len; i += 1) {
		currentASCII = alphabet[i].charCodeAt() + 26 - offset;
		if (currentASCII <= 122) {	
			cypher += String.fromCharCode(currentASCII);
		} else {
			cypher += String.fromCharCode(alphabet[i].charCodeAt() - offset);
		}
	}
		
	for (var i = 0, len = str.length; i < len; i += 1) {
		currentLetter = str[i];
		if (str[i + 1] === currentLetter) {
			segment += currentLetter;
			letterCounter += 1;
		} else {
			segmentList.push(segment);
			occurencies.push(letterCounter);
			segment = str[i + 1];
			letterCounter = 1;
		}
	}
	
	for (var i = 0, len = segmentList.length; i < len; i += 1) {
		if (occurencies[i] > 2) {
			str = str.replace(segmentList[i], occurencies[i] + segmentList[i][0]);
		}
	}
	
	for (var i = 0, len = str.length; i < len; i += 1) {
		if (+str[i] / 1 === +str[i]) {
			result += str[i];
		} else {
			encodingCouple = getASCIICouple(str[i]);
			result += encodingCouple[0] ^ encodingCouple[1];
		}
	}
	
	for (var i = 0, len = result.length; i < len; i += 1) {
		if (+result[i]%2===0) {
			sum += +result[i];
		} else if (+result[i]%2===1) {
			product *= +result[i]
		}
	}
	console.log(sum);
	console.log(product);
}

triathlon([
'aaaabbbccccaa',
'3'
]);/* 
console.log("-------------------");
triathlon([
'aaaabbbccccaazzzzzzzzzzzyyyyxx',
'8'
]);
 */

// ------------------------------------------
// 3 - 
// ------------------------------------------

// ------------------------------------------
// 4 - 
// ------------------------------------------
