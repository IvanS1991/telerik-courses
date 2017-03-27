function solve() {
  return function (selector, isCaseSensitive) {
  	if (!isCaseSensitive) {
  		isCaseSensitive = false;
  	}

  	selector = document.querySelector(selector);

  	var mainDiv = document.createElement("div");
  	var addDiv = document.createElement("div");
  	var searchDiv = document.createElement("div");
  	var resultDiv = document.createElement("div");

  	mainDiv.className += " items-control";

  	addDiv.className += " add-controls";

  	(function addControls() {
  		var text = document.createElement("label");
  		var textName = document.createElement("input");
  		var btn = document.createElement("button");

  		text.innerHTML = "Enter text";

  		textName.setAttribute("type", "text");

  		btn.className += " button";
  		btn.innerHTML = "Add";
  		btn.addEventListener("click", function() {
  			var list = document.getElementsByClassName("items-list")[0];
  			var element = document.createElement("li");
  			var elBtn = document.createElement("button");
  			var elText = document.createElement("p");

  			element.className += " list-item";

  			elBtn.className += " button";
  			elBtn.innerHTML = "X"
  			elBtn.addEventListener("click", function() {
  				list.removeChild(this.parentNode);
  			});

  			elText.innerHTML = textName.value;

  			element.appendChild(elBtn);
  			element.appendChild(elText);
  			list.appendChild(element);
  		})


  		addDiv.appendChild(text);
  		addDiv.appendChild(textName);
  		addDiv.appendChild(btn);
  	}())

  	searchDiv.className += " search-controls";

  	(function searchRender() {
  		var text = document.createElement("label");
  		var searchBox = document.createElement("input");

  		text.innerHTML = "Search";

  		searchBox.setAttribute("type", "text");
  		searchBox.addEventListener("keyup", function() {
  			var listItems = document.getElementsByClassName('list-item');
  			var pattern = searchBox.value;
  			var current = ""

  			for (var i = 0, len = listItems.length; i < len; i += 1) {
  				current = listItems[i].lastElementChild.innerHTML;

  				if (!isCaseSensitive) {
  					pattern = pattern.toLowerCase();
  					current = listItems[i].lastElementChild.innerHTML.toLowerCase();
  				}

  				if (current.indexOf(pattern) >= 0) {
  					listItems[i].style.display = "";
  				} else {
  					listItems[i].style.display = "none";
  				}
  			}
  		})

  		searchDiv.appendChild(text);
  		searchDiv.appendChild(searchBox);
  	}())

  	resultDiv.className += " result-controls";

  	(function resultRender() {
  		var ul = document.createElement("ul");

  		ul.className += " items-list";

  		resultDiv.appendChild(ul);
  	}())

  	mainDiv.appendChild(addDiv);
  	mainDiv.appendChild(searchDiv);
  	mainDiv.appendChild(resultDiv);

  	selector.appendChild(mainDiv);
  };
}

module.exports = solve;