// ++++++++++++++++++++++++++++++
// 1 - Reverse string
// ++++++++++++++++++++++++++++++
function reverseString(array) {
  var str = array[0],
  	len = str.length,
  	revStr = "";
  
  for (var i = 0; i < len; i += 1) {
    revStr += str[len-1-i];
  }
  
  console.log(revStr);
}

/* reverseString([ 'sample' ]);
reverseString([ 'qwertytrewq' ]); */

// ++++++++++++++++++++++++++++++
// 2 - Correct brackets
// ++++++++++++++++++++++++++++++
function correctBrackets(array) {
	var str = array[0],
		len = str.length,
		bracketDifference = 0,
		result = "";
	
	for (var i = 0; i < len; i += 1) {
		if (str[i] === "(") {
			bracketDifference += 1;
		}
		if (str[i] === ")") {
			bracketDifference -= 1;
		}
	}
	
	bracketDifference === 0 ? result = "Correct" : result = "Incorrect";
	
	console.log(result);
}

/* correctBrackets([ '((a+b)/5-d)' ]);
correctBrackets([ ')(a+b))' ]); */

// ++++++++++++++++++++++++++++++
// 3 - Sub-string in text
// ++++++++++++++++++++++++++++++
function substringCount(array) {
	var substring = array[0],
		str = array[1],
		len = str.length,
		match = false;
		count = 0;
		
	for (var i = 0, len1 = str.length; i < len1; i += 1) {
		if (str[i].toLowerCase() === substring[0].toLowerCase()) {
			for (var j = 0, len2 = substring.length; j < len2; j += 1) {
				if (str[i+j].toLowerCase() === substring[j].toLowerCase()) { 
					match = true;
				} else {
					match = false;
					break;
				}
			}
			match ? count += +match : count += 0;
		}
	}
	
	console.log(count);
}

/* substringCount([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);

substringCount([
    'yolo',
    'yolo yalo yolo yelo yolo'
]); */

// ------------------------------
// 4 - Parse tags - ? ? ? ? ? ? ? ? ? ? ? ? ? ?
// ------------------------------
function parseTags(array) {
	var str = array[0],
		tagRegex = /<(.*?)>(.*?[^<>])<\/.*?>/ig;
		
	str = str.replace(tagRegex, function(none, tag, text) {
		var result = "";
		if (tag === "orgcase") {
			result = text;
		} else if (tag === "upcase") {
			result = text.toUpperCase();
		} else if (tag === "lowcase") {
			result = text.toLowerCase();
		}
		return result;
	});
	
	console.log(str);
}

parseTags([ 'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.' ]);
console.log("-------------------------");
parseTags([ 'I am <upcase>Ivan</upcase> and I am living in <lowcase>SOFIA</lowcase>. I <orgcase>loVe</orgcase> <lowcase><upcase>boobs</upcase></lowcase>' ]);
		
	

// ++++++++++++++++++++++++++++++
// 5 - nbsp
// ++++++++++++++++++++++++++++++
function replaceNbsp(array) {
	var str = array[0],
		len = str.length,
		result = "";

	for (var i = 0; i < len; i += 1) {
		if (str[i] === " ") {
			result += "&nbsp;";
		} else {
			result += str[i];
		}
	}
	
	console.log(result);
}	

/* replaceNbsp([ 'hello world' ]);
replaceNbsp([ 'This text contains 4 spaces!!' ]);
 */
// ++++++++++++++++++++++++++++++
// 6 - Extract text from HTML
// ++++++++++++++++++++++++++++++
function extractText(array) {
  var len = array.length;
	
	for (var i = 0; i < len; i += 1) {
		array[i] = array[i].replace(/<.*?>/ig, "").trim();
	}
	
	console.log(array.join(""));
}

/* extractText([
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
]); */

// ------------------------------
// 7 - Parse URL - ? ? ? ? ? ? ? ? ? ?
// ------------------------------
/* function parseUrl(array) {
	var str = array[0],
		len = str.length,
		output = {
			protocol : "",
			server : "",
			resource : ""
		};
		
	for (var i = 0; i < len; i += 1) {
		if (str[i] !== ":") {
			output.protocol += str[i];
		} else {
			for (var i = str.search("://") + 3; i < len; i += 1) {
				if (str[i] !== "/") {
					output.server += str[i];
				} else {
					for (var i = str.search(/\w\/\w/) + 1; i < len; i += 1) {
						output.resource += str[i];
					}
				}
			}
		}
	}
	
	console.log("protocol: " + output.protocol);
	console.log("server: " + output.server);
	console.log("resource: " + output.resource);
} */

function parseUrl(array) {
	var str = array[0],
		protocolRegex = /(h[a-z]+)/ig,
		serverRegex = /([a-z]*\.*[a-z]*\.[a-z]*)/ig,
		resourceRegex = /(\/.*[^.])/ig,
		protocolMatches = str.match(protocolRegex),
		serverMatches = str.match(serverRegex),
		result = {
			protocol : "",
			server : "",
			resource: ""
		};
	
	
	console.log(str.match(protocolRegex));
	console.log(str.match(serverRegex));
	console.log(str.match(resourceRegex));
}

/* parseUrl([ 'http://telerikacademy.com/Courses/Courses/Details/239' ]);
console.log("----------------------------");
parseUrl([ 'www.bgcoder.com/Contests/Compete/Index/364#6' ]);
console.log("----------------------------");
parseUrl([ 'https://www.youtube.com/watch?v=4FsFJznC9s0&t=980s' ]); */
// ++++++++++++++++++++++++++++++
// 8 - Replace tags
// ++++++++++++++++++++++++++++++
function replaceTags(array) {
    var anchorRegex = /<a href="(.*?)">(.*?)<\/a>/ig,
			str = array[0];
			
		str = str.replace(anchorRegex, function(none, link, content) {
			return ("[" + content + "](" + link + ")");
		});
 
    console.log(str);
}

/* replaceTags([ '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>' ]); */
