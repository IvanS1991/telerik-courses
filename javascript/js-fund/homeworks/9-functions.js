// ++++++++++++++++++++++++++++++
// 1 - Say hello
// ++++++++++++++++++++++++++++++
function sayHello(name) {
	console.log("Hello, " + name + "!");
}

// ++++++++++++++++++++++++++++++
// 2 - Get largest number
// ++++++++++++++++++++++++++++++
function biggestOfThree(array) {
	var numbers = array[0].split(" "),
			n1 = +numbers[0],
			n2 = +numbers[1],
			n3 = +numbers[2];
			
	function getMax(num1, num2) {
		return (num1 >= num2 ? num1 : num2);
	}
	console.log(getMax(getMax(n1, n2), getMax(n2, n3)));
}

// ++++++++++++++++++++++++++++++
// 3 - English digit
// ++++++++++++++++++++++++++++++
function lastDigitAsWord(number) {
	var digitAsWord;
	var lastDigit = number%10;
	switch (lastDigit) {
		case 0: digitAsWord = "zero"; break;
		case 1: digitAsWord = "one"; break;
		case 2: digitAsWord = "two"; break;
		case 3: digitAsWord = "three"; break;
		case 4: digitAsWord = "four"; break;
		case 5: digitAsWord = "five"; break;
		case 6: digitAsWord = "six"; break;
		case 7: digitAsWord = "seven"; break;
		case 8: digitAsWord = "eight"; break;
		case 9: digitAsWord = "nine"; break;
	}
	console.log(digitAsWord);
}

// ++++++++++++++++++++++++++++++
// 4 - Appearance count 
// ++++++++++++++++++++++++++++++
function appearanceCount(array) {
	var arraySize = +array[0],
		numArray = array[1].split(" "),
		ourNumber = +array[2],
		ourNumberCount = 0;
			
	for (var i = 0; i < arraySize; i += 1) {
		if (ourNumber === +numArray[i]) {
			ourNumberCount += 1;
		}
	}
	console.log(ourNumberCount);
}

// ++++++++++++++++++++++++++++++
// 5 - Larger than neighbours
// ++++++++++++++++++++++++++++++
function largerThanNeighbours(array) {
	var arraySize = +array[0],
		numArray = array[1].split(" "),
		count = 0;
		
	for (var i  = 0; i < arraySize; i += 1) {
		if (+numArray[i] > +numArray[i-1] && +numArray[i] > +numArray[i+1]) {
			count += 1;
		}
	}
	console.log(count);
}

// ++++++++++++++++++++++++++++++
// 6 - First larger than neighbours
// ++++++++++++++++++++++++++++++
function firstLargerThanNeighbours(array) {
	var arraySize = +array[0],
		numArray = array[1].split(" "),
		result = "";
		
	for (var i = 0; i < arraySize; i += 1) {
		if (+numArray[i] > +numArray[i-1] && +numArray[i] > +numArray[i+1]) {
			result = i; break;
		} else {
			result = "-1";
		}
	}
	console.log(result);
}

// ++++++++++++++++++++++++++++++
// 7 - Sorting array
// ++++++++++++++++++++++++++++++
function sortArray(array) {
	var arraySize = +array[0],
		numArray = array[1].split(" "),
		newArray = [];
		
	function findMax(array) {
		var maxNumber = +array[0];
		for (var i = 0, len = array.length; i < len; i += 1) {
			if (maxNumber <= +array[i]) {
				maxNumber = +array[i];
			}
		}
		array[array.indexOf(maxNumber + "")] = null;
		return maxNumber;
	}
	
	for (var i = 0; i < arraySize; i += 1) {
		newArray.unshift(findMax(numArray));
	}
	console.log(newArray.join(" "));
}