//++++++++++++++++++++++++++++++++
// 1 - Task 1
//++++++++++++++++++++++++++++++++
function solve() {
	return function sum(args) {
		// Throws error if no arguments are passed
		if (typeof args === "undefined") {
			throw {
				name: "Error",
				message: "no arguments passed"
			}
		}
		
		// Returns null if the array is empty
		if (args.length === 0) {
			return null;
		}
		
		// Throws error if any of the elements is not convertible to Number
		// Boolean is convertible???
		args.forEach(function(x) {
			if (+x/1 !== +x || typeof x === "boolean") {
				throw {
					name: "Error",
					message: "cannot convert to Number"
				}
			}
		})
		
		// Variables
		var args = args.map(Number),
			len = args.length,
			result = 0;
		
		// Get result (sum of all the numbers)
		for (var i = 0; i < len; i += 1) {
				result += args[i];
		}
		
		return result;
	}
}


//++++++++++++++++++++++++++++++++
// 2 - Task 2
//++++++++++++++++++++++++++++++++
function solve() {
	return function findPrimes(n1, n2) {
		// Throw error if any of the range parameters is missing
		if (typeof n1 === "undefined" || typeof n2 === "undefined") {
			throw {
				name: "Error",
				message: "range parameter(s) are missing"
			}
		}
		
		// Throw error if any of the range parameters is not convertible to Number
		// Boolean is convertible???
		if (+n1/1 !== +n1 || +n2/1 !== +n2 || typeof n1 === "boolean" || typeof n2 === "boolean") {
			throw {
				name: "Error",
				message: "range parameter(s) not convertible to Number"
			}
		}
		
		// Variables
		var current = +n1,
			end = +n2,
			divCount = 0,
			result = [];
		
		
		// Get result (prime numbers in range [n1, n2]
		for (current; current <= end; current += 1) {
			for (var i = 1; i <= current; i += 1) {
				if (current % i === 0) {
					divCount += 1;
				}
			}
			if (divCount === 2) {
				result.push(current);
			}
			divCount = 0;
		}
		
		return result;
	}
}