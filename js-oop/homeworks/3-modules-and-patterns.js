//--------------------------------
// 1 - Task 1 - I N C O M P L E T E
//--------------------------------
function solve() {
	var Course = {
		studentID: 0,
		
		homeworkID: 0,
	
		title: "",
		
		presentations: [],
		
		students: [],
	
		init: function(title, presentations) {
			var regex1 = /^[^\s](.+?)[^\s]$/ig,
				regex2 = /\s{2,}/ig;
			
			if (typeof presentations === "undefined" || presentations.length === 0) {
				throw "Missing presentations";
			}
			
			if (title.search(regex1) === -1 || title.search(regex2) !== -1) {
				throw "Invalid title name";
			}
			
			for (var i = 0, len = presentations.length; i < len; i += 1) {
				if (presentations[i].search(regex1) === -1 || presentations[i].search(regex2) !== -1)
				{
					throw "Invalid presentation name";
				}
			}
			
			this.title = title;
			
			
			presentations.forEach(function(title) {
				var presentation;
				Course.homeworkID += 1;
				presentation = {
					title: title,
					id: Course.homeworkID
				}
				Course.presentations.push(presentation);
			});
		},
		
		addStudent: function(name) {
			var firstName = name.split(" ")[0],
				lastName = name.split(" ")[1],
				regex = /^[A-Z]{1}[a-z]*/;
			
			if (name.split(" ").length > 2) {
				throw "Invalid student name";
			}
			
			if (firstName.search(regex) === -1 || lastName.search(regex) === -1) {
				throw "Invalid student name";
			}
			
			this.studentID += 1;
			
			this.students.push({
				firstname: firstName,
				lastname: lastName,
				id: this.studentID
			});
			
			return this.studentID;
		},
		
		getAllStudents: function() {
			return this.students;
		},
		
		submitHomework: function(studentID, homeworkID) {
			var validStudentID = Course.students.some(x => x.id === studentID),
				validHomeworkID = Course.presentations.some(x => x.id === homeworkID);
			
			if (!validStudentID || !validHomeworkID) {
				throw "Invalid student/homework ID";
			}
		},
		
		pushExamResults: function(results) {
		},
		
		getTopStudents: function() {
		}
	};

	return Course;
}