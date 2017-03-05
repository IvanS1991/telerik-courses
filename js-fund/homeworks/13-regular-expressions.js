// ------------------------------
// 1 - Format with placeholders - ? ? ? ? ? ? ? ? ? ? 
// ------------------------------
function formatWithPlaceholders(array) {
	var options = JSON.parse(array[0]),
		template = array[1],
		optionsList = template.match(/#\{\w+\}/ig);
	
	for (var key in options) {
		for (var i in optionsList) {
			optionsList[i].search(key) !== -1 ? template = template.replace(optionsList[i], options[key]) : template = template;
		}
	}
	
	console.log(template);
}

/* formatWithPlaceholders([
'{ "name": "John" }',
"Hello, there! Are you #{name}?"
]);
console.log("-------------------------------");
formatWithPlaceholders([
'{ "name": "John", "age": 13 }',
"My name is #{name} and I am #{age}-years-old"
]); */

// ------------------------------
// 2 - HTML Binding
// ------------------------------
function HTMLBinding(array) {
	var options = JSON.parse(array[0]),
		template = array[1],
		bindings = template.match(/data-bind-(.*?)="(.*?)"/g),
		index;

	function attrValue(x) {
		var index = x.indexOf('='),
			attribute = x.substring(10, index),
			value = x.substring(index + 2,x.length-1);
		return [attribute , value];
	}

	bindings = bindings.map(x => attrValue(x));
	for (var i = 0; i < bindings.length; i += 1) {
		if (bindings[i][0].toLowerCase() === 'content') {
			template = template.replace(/>/, ">" + options[bindings[i][1]]);
		} else {
			index = template.indexOf('>');
			if (template[index-1] === '/'){
				template = template.replace(/\/>/, " " + bindings[i][0] + "=\"" + options[bindings[i][1]] + "\"\/>");
			} else {
				template = template.replace(/>/, " " + bindings[i][0] + "=\"" + options[bindings[i][1]] + "\">");
			}
		}
	}
	console.log(template);
}

/* HTMLBinding([
    '{ "name": "Steven" }',
    '<div data-bind-content="name"></div>'
]);
console.log("--------------------------------");
HTMLBinding([
    '{ "name": "Elena", "link": "http://telerikacademy.com" }',
    '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></a>'
]); */