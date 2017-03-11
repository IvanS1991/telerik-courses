var something = document.getElementById('something');
var div = document.getElementsByTagName('div')[0];

function solve() {
	return function addElement(element, contents) {
		if (!element || !contents) {
			throw new Error("you must pass all arguments");
		}
		if (typeof element !== "string" && (typeof element !== "object" || !(element instanceof HTMLElement))) {
			throw new Error("you must pass a string or dom element as first parameter");
		}
		if ( !Array.isArray(contents) ) {
			throw new Error("you must pass an array of contents as second parameter");
		}

		function constructFragment(contents) {
			var frag = document.createDocumentFragment();
			var div;
			for (var i = 0, len = contents.length; i < len; i += 1) {
				if (typeof contents[i] !== "number" && typeof contents[i] !== "string") {
					throw new Error("contents must be numbers or strings");
				}
				div = document.createElement('div');
				div.innerHTML = contents[i];
				frag.appendChild(div);
			}
			return frag;
		}

		var frag = constructFragment(contents);

		if (typeof element === "string") {
			element = document.getElementById(element);
			if (!element) {
				throw new Error("no element with such id");
			}
		}
		element.innerHTML = "";
		element.appendChild(frag);
	};
};

addElement('root', [5, 6, 7, 8]);
addElement(div, [1, 2, 3, 4]);