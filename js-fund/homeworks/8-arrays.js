// ++++++++++++++++++++++++++++++
// 1 - Increase array members
// ++++++++++++++++++++++++++++++
function increaseArrayMembers(array) {
	var n = +array[0],
		newArray = [];
	if (n >= 1 && n <= 20 && n / n === 1) {
		for (var i = 0; i < n; i += 1) {
			newArray.push(5*i);
		}
	} else {
		console.log('invalid number');
	}
	for (var i = 0, length = newArray.length; i < length; i += 1) {
		console.log(newArray[i]);
	}
}

// ------------------------------
// 2 - Lexicographically comparison - ? ? ? ? ? ? ? ?
// ------------------------------
function lexCompare(array) {
	var char1 = array[0],
		char2 = array[1],
		len = char1.length,
		letterDifference = 0,
		result;
		
	for (var i = 0; i < len; i += 1) {
		if (char1[i].toLowerCase !== char2[i].toLowerCase) {
			letterDifference = char1[i].toLowerCase().charCodeAt() - char2[i].toLowerCase().charCodeAt()
			break;
		}
	}
	
	if (letterDifference === 0) {
		result = "=";
	} else if (letterDifference < 0) {
		result = "<";
	} else if (letterDifference > 0) {
		result = ">";
	}
	
	console.log(result);
}

lexCompare(['hello', 'halo']);
console.log("------------------------------");
lexCompare(['food', 'food']);
console.log("------------------------------");
lexCompare(['abc', 'bc']);

// ++++++++++++++++++++++++++++++
// 3 - Maximal sequence 
// ++++++++++++++++++++++++++++++
function maximalSequence(array) {
	var sequences = [],
		counter = 1,
		maxSequence;
		
	for (var i = 1, len = array.length; i < len; i += 1) {
		if (+array[i] === +array[i-1]) {
			counter += 1;
			sequences.push(counter);
		} else {
			counter = 1;
		}
	}
	
	maxSequence = sequences[0];
	for (var i = 0, len = sequences.length; i < len; i += 1) {
		if (maxSequence <= sequences[i]) {
			maxSequence = sequences[i];
		}
	}
	console.log(maxSequence);
}

// ++++++++++++++++++++++++++++++
// 4 - Maximal increasing sequence
// ++++++++++++++++++++++++++++++
function maximalIncreasingSequence(array) {
	var sequences = [],
		counter = 1,
		maxSequence;
		
	for (var i = 1, len = array.length; i < len; i += 1) {
		if (+array[i] > +array[i-1]) {
			counter += 1;
			sequences.push(counter);
		} else {
			counter = 1;
		}
	}
	
	maxSequence = sequences[0];
	for (var i = 0, len = sequences.length; i < len; i += 1) {
		if (maxSequence <= sequences[i]) {
			maxSequence = sequences[i];
		}
	}
	console.log(maxSequence);
}

// ++++++++++++++++++++++++++++++
// 5 - Selection sort - ? ? ? ? ? ? ? ? ? ? ? ? 
// ++++++++++++++++++++++++++++++
function selectionSort(array){
	var numbers = array.splice(1,+array[0]),
		len = +array[0],
		min,
		temp;
  for (var i = 0; i < len; i += 1) {
    min = i,
		temp = 0;
    for (var j = i+1; j < len; j += 1) {
      if (+numbers[j] < +numbers[min]) {
       min = j;
      }
    }
    temp = numbers[i];
		numbers[i] = numbers[min];
		numbers[min] = temp;
		console.log(numbers[i]);
  }
}

/* selectionSort(['6', '3', '4', '1', '5', '2', '6']);
console.log("--------------------------------------");
selectionSort(['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']); */

// ++++++++++++++++++++++++++++++
// 6 - Most frequent number
// ++++++++++++++++++++++++++++++
function mostFrequent(array) {
	var numbers = array.slice(1,array.length),
		len = +array[0],
		uniqueNumbers = [],
		numberOccurencies = [],
		counter = 0,
		biggest = findMax(numbers),
		index;
	
	function findMax(array) {
		var max = array[0];
		for (var i = 0; i < len; i += 1) {
			if (max <= +array[i]) {
				max = array[i];
			}
		}
		return (max);
	}
	
	for (var i = 0; i <= biggest; i += 1) {
		for (var j = 0; j < len; j += 1) {
			if (+numbers[j] === i) {
				counter += 1;
			}
		}
		if (counter > 0) {
			uniqueNumbers.push(i);
			numberOccurencies.push(counter);
		}
		counter = 0;
	}
	
	index = numberOccurencies.indexOf(findMax(numberOccurencies));
	
	console.log(uniqueNumbers[index] + " (" + numberOccurencies[index] + " times)");
}

/* mostFrequent(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']); */


// ++++++++++++++++++++++++++++++
// 7 - Binary search
// ++++++++++++++++++++++++++++++
function binarySearch(array) {
	var numbers = array.slice(1,array.length-1),
		len = numbers.length,
		initIndex = len / 2 | 0,
		index = initIndex,
		ourNumber = +array[array.length-1],
		foundMatch = false;
		
	for (var i = 0; i < len; i += 1) {
		if (+numbers[index] === ourNumber) {
			state = true;
			console.log(index);
			return index;
		} else if (+numbers[index] > ourNumber) {
			index -= Math.ceil(initIndex / Math.pow(2, i+1));
		} else if (+numbers[index] < ourNumber) {
			index += Math.ceil(initIndex / Math.pow(2, i+1));
		}
	}
	if (!foundMatch) {
		console.log(-1);
	}
}

/* binarySearch(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']); */

// ------------------------------
// 10 - Prime numbers ? ? ? ? ? ?
// ------------------------------
function primeNumbers(n) {
	var numbers = new Array(n+1),
		limit = Math.sqrt(n);
	
	for (var i = 2; i <= limit; i += 1) {
		for (var j = i*i; j <= n; j += i) {
			numbers[j] = false;
		}
	}
	
	for (var i = n; i > 0; i -= 1) {
		if (typeof numbers[i] === "undefined") {
			console.log(i);
			break;
		}
	}
}

/* primeNumbers(13);
primeNumbers(126);
primeNumbers(26);
primeNumbers(300); */