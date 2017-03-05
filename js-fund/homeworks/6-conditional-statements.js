// ++++++++++++++++++++++++++++++
// 1 - Exchange if greater
// ++++++++++++++++++++++++++++++
function exchangeIfGreater(array) {
  var a = Number(array[0]);
  var b = Number(array[1]);
  var c;
  if (a > b) {
    c = b;
    b = a;
    a = c;
  };
  console.log(String(a) + " " + String(b));
}

// ++++++++++++++++++++++++++++++
// 2 - Multiplication Sign
// ++++++++++++++++++++++++++++++
function multSign(array) {
  let a = Number(array[0]);
  let b = Number(array[1]);
  let c = Number(array[2]);
  if (a === 0 || b === 0 || c === 0) {
    console.log("0");
  } else if ( (a > 0 && b > 0 && c > 0) || ((a<0 && b<0 && c>0) || (a>0 && b<0 && c<0) || (a<0&&b>0&&c<0))) {
    console.log("+");
  } else {
    console.log("-");
  }
}

// ++++++++++++++++++++++++++++++
// 3 - The biggest of three
// ++++++++++++++++++++++++++++++
function biggestOfThree(array) {
  let a = Number(array[0]);
  let b = Number(array[1]);
  let c = Number(array[2]);
  if (a>=b && a>=c) {
    console.log(a);
  } else if (b>=a && b>=c) {
    console.log(b);
  } else if (c>=a && c>=b) {
    console.log(c);
  }
}

// ++++++++++++++++++++++++++++++
// 4 - Sort three numbers
// ++++++++++++++++++++++++++++++
function sortThreeNumbers(array) {
	var a = +array[0];
	var b = +array[1];
	var c = +array[2];
	var result = "";
	if (a >= b && a >= c) {
		result += a + " ";
		if (b >= c) {
			result += b + " " + c;
		} else {
			result += c + " " + b;
		}
	} else if (b >= a && b >= c) {
		result += b + " ";
		if (a >= c) {
			result += a + " " + c;
		} else {
			result += c + " " + a;
		}
	} else if (c >= a && c >= b) {
		result += c + " ";
		if (a >= b) {
			result += a + " " + b;
		} else {
			result += b + " " + a;
		}
	}
	console.log(result);
}


// ++++++++++++++++++++++++++++++
// 5 - Digit as word
// ++++++++++++++++++++++++++++++
function digitAsWord(array) {
	var digit = +array[0];
	var inWords = "";
	if (typeof(digit) === "number" && digit >= 0 && digit <= 9) {
		switch (digit) {
			case 0:
				inWords = "zero";
				break;
			case 1:
				inWords = "one";
				break;
			case 2:
				inWords = "two";
				break;
			case 3:
				inWords = "three";
				break;
			case 4:
				inWords = "four";
				break;
			case 5:
				inWords = "five";
				break;
			case 6:
				inWords = "six";
				break;
			case 7:
				inWords = "seven";
				break;
			case 8:
				inWords = "eight";
				break;
			case 9:
				inWords = "nine";
				break;
			default: 
				inWords = "not a digit";
		}
	} else {
		inWords = "not a digit";
	}	
	console.log(inWords);
}

// ++++++++++++++++++++++++++++++
// 6 - Quadratic equation
// ++++++++++++++++++++++++++++++
function quadraticEquation(array) {
	var a = +array[0];
	var b = +array[1];
	var c = +array[2];
	var d = Math.pow(b, 2) - 4 * a * c;
	if (d > 0) {
		var x1 = -(b - Math.sqrt(d))/(2*a);
		var x2 = -(b + Math.sqrt(d))/(2*a);
		console.log("x1=" + Math.min(x1,x2).toFixed(2) + "; x2=" + Math.max(x1,x2).toFixed(2));
	} else if (d === 0) {
		var x = -b/(2*a);
		console.log("x1=x2=" + x.toFixed(2));
	} else {
		console.log("no real roots");
	}
}


// ++++++++++++++++++++++++++++++
// 7 - The biggest of five numbers
// ++++++++++++++++++++++++++++++
function biggestOfFive(array) {
  var biggest = +array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (+array[i] > biggest) {
      biggest = +array[i]
    };
  };
  console.log(biggest);
}

// ------------------------------
// 8 - Number as words - I N C O M P L E T E
// ------------------------------
function numberAsWords(array) {
	var number = +array[0],
		digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
		
		tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
		
		tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
		
		result = "";
		
	if (number >= 0 && number <= 999 && number/1 === number) {
		if ( (number / 100 | 0) >= 1) {
			if (number%100 === 0) {
				result += digits[number/100|0] + " hundred";
			} else {
				if ( number % 100 <= 9) {
					result += digits[number/100|0] + " hundred and " + digits[number%100];
				} else if (number % 100 >= 10 && number % 100 <= 19) {
					result += digits[number/100|0] + " hundred and " + tenToNineteen[number%100-10];
				} else if (number %100 >= 20) {
					if ( (number%100) % 10 !== 0) {
						result += digits[number/100|0] + " hundred and " + tens[((number%100)/10|0)-2] + " " + digits[(number%100)%10];
					} else {
						result += result += digits[number/100|0] + " hundred and " + tens[((number%100)/10|0)-2];
					}
				}
			}
		} else {
			if ( number % 100 <= 9) {
				result += digits[number%100];
			} else if (number % 100 >= 10 && number % 100 <= 19) {
				result += tenToNineteen[number%100-10];
			} else if (number %100 >= 20) {
				if ( (number%100) % 10 !== 0) {
					result += tens[((number%100)/10|0)-2] + " " + digits[(number%100)%10];
				} else {
					result += result += tens[((number%100)/10|0)-2];
				}
			}
		}
		console.log(result[0].toUpperCase() + result.slice(1,result.length));
	} else {
		console.log('not a number');
	}
}