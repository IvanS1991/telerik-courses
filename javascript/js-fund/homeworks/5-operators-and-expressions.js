// ++++++++++++++++++++++++++++++
// 1 - Odd or Even
// ++++++++++++++++++++++++++++++
function oddOrEven(array) {
	if ( Number(array[0]) % 2 === 0) {
	  console.log("even " + Number(array[0]));
	} else {
	  console.log("odd " + Number(array[0]));
	}
}

// ++++++++++++++++++++++++++++++
// 2 - Divide by 7 and 5
// ++++++++++++++++++++++++++++++
function divide(array) {
	if ( Number(array[0]) % 5 === 0 && Number(array[0]) % 7 === 0 ) {
	  console.log("true " + Number(array[0]));
	} else {
	  console.log("false " + Number(array[0]));
	}
}

// ++++++++++++++++++++++++++++++
// 3 - Rectangles
// ++++++++++++++++++++++++++++++
function rectCalc(array) {
	var width = Number(array[0]);
	var height = Number(array[1]);
	var area = height * width;
	var perimeter = (height + width) * 2;
	console.log(area.toFixed(2) + " " + perimeter.toFixed(2));
}

// ++++++++++++++++++++++++++++++
// 4 - Third Digit
// ++++++++++++++++++++++++++++++
function thirdDigit(array) {
	var number = array[0];
	var third = Number(number[number.length-3]);
	if (third === 7 && number.length >= 3) {
		console.log("true");
	} else if (third !== 7 && number.length >= 3) {
		console.log("false " + third);
	} else {
		console.log("false " + 0);
	}
}

// ++++++++++++++++++++++++++++++
// 5 - Third Bit
// ++++++++++++++++++++++++++++++
function thirdBit(array) {
	let number = +array[0];
	let bitNumber = number.toString(2);
	let indexFromRight = 4;
	if (number > 0) {	
		if (bitNumber.length >= indexFromRight) {
			console.log(+bitNumber[bitNumber.length-indexFromRight]);
		} else {
			console.log(0);
		};
	};
}

// ++++++++++++++++++++++++++++++
// 6 - Point in a circle
// ++++++++++++++++++++++++++++++
function pointInCircle(array) {
    var pointX = +array[0];
    var pointY = +array[1];
    var circleX = 0;
    var circleY = 0;
    var circleRadius = 2;
    var pointDistance = function (x, y) {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    };
    if (Math.pow(pointX - circleX, 2) + Math.pow(pointY - circleY, 2) <= Math.pow(circleRadius, 2)) {
        console.log("yes " + pointDistance(pointX, pointY).toFixed(2));
    } else {
        console.log("no " + pointDistance(pointX, pointY).toFixed(2));
    }
}

// ++++++++++++++++++++++++++++++
// 7 - Prime check
// ++++++++++++++++++++++++++++++
function isPrime(array) {
	let number = +array[0];
	let divCount = 0;
	if (number <= 100 && number > 0) {
		for (let i = 1; i <= number; i += 1) {
			if (number % i === 0) {
				divCount += 1;
			};
		};
	};
	if (divCount === 2) {
		console.log(true);
	} else {
		console.log(false);
	};
}

// ++++++++++++++++++++++++++++++
// 8 - Trapezoids
// ++++++++++++++++++++++++++++++
function trapezoid(array) {
	var a = Number(array[0]);
	var b = Number(array[1]);
	var h = Number(array[2]);
	var area = h*((a+b)/2);
	console.log(area.toFixed(7));
}

// ++++++++++++++++++++++++++++++
// 9 - Point, circle, rectangle
// ++++++++++++++++++++++++++++++
function pointInCircAndRect(array) {
	var pointX = +array[0];
	var pointY = +array[1];
	
	var rectTop = 1;
	var rectLeft = -1;
	var rectWidth = 6;
	var rectHeight = 2;
	
	var circleX = 1;
	var circleY = 1;
	var circleRadius = 1.5;
	
	var result = "";
	
	if (Math.pow(pointX - circleX, 2) + Math.pow(pointY - circleY, 2) <= Math.pow(circleRadius, 2)) {
		result += "inside circle";
	} else {
		result += "outside circle";
	}
	
	if (pointX >= rectLeft && pointX <= (rectLeft + rectWidth) && pointY <= rectTop && pointY >= (rectTop - rectHeight)) {
		result += " inside rectangle";
	} else {
		result += " outside rectangle";
	}
	
	console.log(result);
}
