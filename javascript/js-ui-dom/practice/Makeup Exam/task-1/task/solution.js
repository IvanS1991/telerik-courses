function solve() {
    return function (selector, tabs) {
    	selector = document.querySelector(selector);

        var ul = document.createElement('ul');
        var li = document.createElement('li');
        var a = document.createElement('a');
        var p = document.createElement('p');
        var button = document.createElement('button');

    	var tabsNav = ul.cloneNode(true);
    	tabsNav.className += " tabs-nav";

    	var tabsContent = ul.cloneNode(true);
    	tabsContent.className += " tabs-content";

    	var frag = document.createDocumentFragment();

    	var navLi;
    	var navA;
    	
    	var contentLi;
    	var contentP;
    	var contentButton;

    	for (var i = 0, len = tabs.length; i < len; i += 1) {
    		navLi = li.cloneNode(true);
    		
    		navA = a.cloneNode(true);
    		navA.className += " tab-link";
    		navA.setAttribute("title-index", i);
    		navA.innerHTML = tabs[i].title;

    		navLi.appendChild(navA);

    		tabsNav.appendChild(navLi);

    		contentLi = li.cloneNode(true);
    		contentLi.className += " tab-content";
    		if (i === 0) {
    			contentLi.className += " visible";
    		}
    		contentLi.setAttribute("content-index", i);
    		
    		contentP = p.cloneNode(true);
    		contentP.innerHTML = tabs[i].content;

    		contentButton = button.cloneNode(true);
    		contentButton.className += " btn-edit";
    		contentButton.innerHTML = "Edit";

    		contentLi.appendChild(contentP);
    		contentLi.appendChild(contentButton);

    		tabsContent.appendChild(contentLi);
		}

		frag.appendChild(tabsNav);
		frag.appendChild(tabsContent);

		selector.appendChild(frag);

		tabsNav.addEventListener("click", function(event) {
			var contents = [].slice.apply(tabsContent.children);
			var index;
			if (event.target.className.indexOf("tab-link") >= 0) {
				index = event.target.getAttribute("title-index");
			}
			contents.forEach(function(x) {
				x.className = x.className.replace(" visible", "");
				if (x.getAttribute("content-index") === index) {
					x.className += " visible";
				}
			})
		});

		tabsContent.addEventListener("click", function(event) {
			var textArea;
			if (event.target.className.indexOf("btn-edit") >= 0) {
				textArea = document.createElement("textarea");
				textArea.className += " edit-content";
				textArea.innerHTML = event.target.previousElementSibling.innerHTML;
				if (event.target.innerHTML === "Edit") {
					event.target.innerHTML = "Save";
					event.target.parentNode.appendChild(textArea);
				} else if (event.target.innerHTML === "Save") {
					event.target.previousElementSibling.innerHTML = document.getElementsByClassName("edit-content")[0].value;
					event.target.parentNode.removeChild(event.target.parentNode.lastElementChild);
					event.target.innerHTML = "Edit";
				}
			}
		})
    }
}

// submit the above!

if (typeof module !== 'undefined') {
    module.exports = solve;
}