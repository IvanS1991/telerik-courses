// ++++++++++++++++++++++++++++++
// 1 - Numbers
// ++++++++++++++++++++++++++++++
function numbersToN(array) {
	var lastNumber = +array[0];
	var result = "";
	for (var i = 1; i <= lastNumber; i += 1) {
		result += i + " ";
	};
	console.log(result);
}

// ++++++++++++++++++++++++++++++
// 2 - MMSA
// ++++++++++++++++++++++++++++++
function minMaxSumAvg(array) {
	var min = 10000;
	var max = -10000;
	var sum = 0;
	var average = 0;
	var nanCount = 0;
	for (var i = 0; i < array.length; i += 1) {
		if (+array[i] / 1 === +array[i]) {
			if (max <= +array[i]) {
				max = +array[i];
			} 
			if (min >= +array[i]) {
				min = +array[i];
			}
			sum += +array[i];
		} else {
			nanCount += 1;
		}
	}
	average = sum / (array.length-nanCount);
	console.log("min=" + min.toFixed(2));
	console.log("max=" + max.toFixed(2));
	console.log("sum=" + sum.toFixed(2));
	console.log("avg=" + average.toFixed(2));
}

// ++++++++++++++++++++++++++++++
// 3 - Matrix of numbers
// ++++++++++++++++++++++++++++++
function matrixOfNumbers(array) {
	var number = +array[0];
	for (var i = 0; i < number; i += 1) {
		var result = "";
		for (var j = 1; j <= number; j += 1) {
			result += i+j + " ";
		}
		console.log(result);
	}
}

// ++++++++++++++++++++++++++++++
// 4 - Hex to decimal
// ++++++++++++++++++++++++++++++
function hexToDecimal(array) {
	var hexNumber = array[0],
		currentDigit = 0,
		decNumber = 0;
		
	for (var i = 0, length = hexNumber.length - 1; i <= length; i += 1) {
		if (hexNumber[i] / 1 === +hexNumber[i]) {
			currentDigit = +hexNumber[i];
		} else {
			if (hexNumber[i].toLowerCase() === "a") {
				currentDigit = 10;
			} else if (hexNumber[i].toLowerCase() === "b") {
				currentDigit = 11;
			} else if (hexNumber[i].toLowerCase() === "c") {
				currentDigit = 12;
			} else if (hexNumber[i].toLowerCase() === "d") {
				currentDigit = 13;
			} else if (hexNumber[i].toLowerCase() === "e") {
				currentDigit = 14;
			} else if (hexNumber[i].toLowerCase() === "f") {
				currentDigit = 15;
			} else {
				return ('invalid symbol at index ' + i);
			}
		}
		decNumber += currentDigit * Math.pow(16, length-i);
	}
	console.log(decNumber);
}
	