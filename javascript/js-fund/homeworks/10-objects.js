// ++++++++++++++++++++++++++++++
// 1 - Planar coordinates
// ++++++++++++++++++++++++++++++
function planarCoordinates(array) {
	var lines = [],
		canBuildTriangle = "",
		Line = function(x1,y1,x2,y2) {
			this.x1 = +x1;
			this.x2 = +x2;
			this.y1 = +y1;
			this.y2 = +y2;
			this.length = function() {
				return (Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
			}
		}
	
	for (var i = 0, len = array.length; i < len; i += 4) {
		lines.push(new Line(array[i], array[i+1], array[i+2], array[i+3]));
	}
	
	if ((lines[0].length() < lines[1].length() + lines[2].length()) && (lines[1].length() < lines[0].length() + lines[2].length()) && (lines[2].length() < lines[0].length() + lines[1].length())) {
		canBuildTriangle = "Triangle can be built";
	} else {
		canBuildTriangle = "Triangle can not be built";
	}
	
	for (var i = 0, len = lines.length; i < len; i += 1) {
		console.log(lines[i].length().toFixed(2));
	}
	
	console.log(canBuildTriangle);
}

/* planarCoordinates([
  '5', '6', '7', '8',
  '1', '2', '3', '4',
  '9', '10', '11', '12'
]);
console.log("------------------------------------");
planarCoordinates([
  '7', '7', '2', '2',
  '5', '6', '2', '2',
  '95', '-14.5', '0', '-0.123'
]); */

// ++++++++++++++++++++++++++++++
// 2 - Remove elements
// ++++++++++++++++++++++++++++++
function removeElements(array) {
	array.remove = function() {
		var newArray = [];
		for (var i = 0, len = array.length; i < len; i += 1) {
			if (array[i] !== array[0]) {
				newArray.push(array[i]);
			}
		}
		return newArray;
	}
	console.log(array.remove().join("\n"));
}

// ++++++++++++++++++++++++++++++
// 5 - Youngest person
// ++++++++++++++++++++++++++++++
function youngestPerson(array) {
	var people = [],
		Person = function(firstname, lastname, age) {
			this.firstName = firstname;
			this.lastName = lastname;
			this.age = age;
		};
	for (var i = 0, len = array.length; i < len; i += 3) {
		people.push(new Person(array[i], array[i+1], array[i+2]));
	}
	function findYoungest(array) {
		var youngest = array[0].age;
		for (var i in array) {
			if (+youngest >= +array[i].age) {
				youngest = array[i].age;
			}
		}
		for (var i in array) {
			if (+youngest === +array[i].age) {
				return (array[i].firstName + " " + array[i].lastName);
			}
		}
	}
	console.log(findYoungest(people));
}

/* youngestPerson([
  'Gosho', 'Petrov', '32',
  'Bay', 'Ivan', '81',
  'John', 'Doe', '42'
]);

youngestPerson([
  'Penka', 'Hristova', '61',
  'System', 'Failiure', '88',
  'Bat', 'Man', '16',
  'Malko', 'Kote', '72'
]); */
