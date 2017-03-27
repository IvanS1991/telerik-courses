/* globals document, window, console */

function solve() {
    return function(selector, initialSuggestions) {
    	console.log(initialSuggestions);
    	var list = initialSuggestions || [];
    	var uniqueList = [];

    	for (var i = 0, len = list.length; i < len; i += 1) {
    		if (uniqueList.indexOf(capitalizeWord(list[i])) < 0) {
    			uniqueList.push(capitalizeWord(list[i]));
    		}
    	}
    	var li = document.createElement('li');
    	li.className += " suggestion";
    	li.style.display = "none";

    	var a = document.createElement('a');
    	a.setAttribute("href", "#");
    	a.className += " suggestion-link";

    	var frag = document.createDocumentFragment();
    	var tbPattern = document.querySelector(".tb-pattern");
    	var addBtn = document.querySelector(".btn-add");

    	selector = document.querySelector(selector); // <--- can this be HTMLElement?
    	var container = selector.querySelector(".suggestions-list");
    	var suggestionList = document.getElementsByClassName("suggestion");

    	populateList();

    	tbPattern.addEventListener("keyup", function(event) {
    		var that = event.target;
    		var match;

			hideAll(suggestionList);
			if (that.value !== "") {
				match = [].slice.apply(suggestionList)
					.filter(function(x) {
						if (x.children[0].innerHTML.toLowerCase().indexOf(that.value.toLowerCase()) >= 0) {
							return x;
						}
					})
					.forEach(function(x) {
						x.style.display = "";
					});
    		}
    	});

    	container.addEventListener("click", function(event) {
    		var that = event.target;
    		if (that.className.indexOf("suggestion-link") >= 0) {
    			tbPattern.value = that.innerHTML;
    		}
    	});

    	addBtn.addEventListener("click", function() {
    		addSuggestion(tbPattern.value);
    	})

    	function hideAll(nodeList) {
    		for (var i = 0, len = nodeList.length; i < len; i += 1) {
    			nodeList[i].style.display = "none";
    		}
    	}

    	function populateList() {
    		var match;
    		container.innerHTML = "";

    		for (var i = 0, len = uniqueList.length; i < len; i += 1) {
    			li = li.cloneNode(false);

	    		a = a.cloneNode(false);
	    		a.innerHTML = uniqueList[i];

	    		li.appendChild(a);
	    		frag.appendChild(li);
	    	}

    		container.appendChild(frag);
    	}

    	function addSuggestion(suggestion) {
    		if (uniqueList.indexOf(suggestion) < 0) {
    			uniqueList.push(suggestion);
    			populateList();
    		}
    	}

    	function capitalizeWord(word) {
    		return word[0].toUpperCase() + word.slice(1).toLowerCase();
    	}
    };
}

module.exports = solve;