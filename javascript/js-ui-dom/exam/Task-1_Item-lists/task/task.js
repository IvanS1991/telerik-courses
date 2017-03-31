function solve() {

	return function(selector, defaultLeft, defaultRight) {
		selector = document.querySelector(selector);
		
		defaultLeft = defaultLeft || [];
		defaultRight = defaultRight || [];
		
		//**********************************************************
		// S T R U C T U R E
		//**********************************************************
		var container = document.createElement('div');
		container.className += "column-container";
		
		var select = document.createElement('div');
		select.className += "select";
		
		var radioBtn = document.createElement('input');
		radioBtn.setAttribute('type', 'radio');
		radioBtn.setAttribute('name', 'column-choice');
		radioBtn.className += " radio-btn";
		select.appendChild(radioBtn);
		
		var label = document.createElement('label');
		label.innerHTML = "Add here";
		select.appendChild(label);
		
		var leftColumn = document.createElement('div');
		leftColumn.className += "column";
		select = select.cloneNode(true);
		select.firstElementChild.checked = true;
		select.firstElementChild.id = "left-radio-button";
		leftColumn.appendChild(select);
		
		var leftOl = document.createElement('ol');
		
		(function() {
			for (var i = 0, len = defaultLeft.length; i < len; i += 1) {
				addEntry(leftOl, defaultLeft[i]);
			}
		}())
		
		leftColumn.appendChild(leftOl);
	
		var rightColumn = document.createElement('div');
		rightColumn.className += "column";
		select = select.cloneNode(true);
		select.firstElementChild.checked = false;
		select.firstElementChild.id = "right-radio-button";
		rightColumn.appendChild(select);
		
		
		var rightOl = document.createElement('ol');
		
		(function() {
			for (var i = 0, len = defaultRight.length; i < len; i += 1) {
				addEntry(rightOl, defaultRight[i]);
			}
		}())
		
		rightColumn.appendChild(rightOl);
		
		var tbInput = document.createElement('input');
		tbInput.setAttribute('type', 'text');
		
		var buttonAdd = document.createElement('button');
		buttonAdd.innerHTML = "Add";
		
		container.appendChild(leftColumn);
		container.appendChild(rightColumn);
		selector.appendChild(container);
		selector.appendChild(tbInput);
		selector.appendChild(buttonAdd);
		
		
		var rightRadio = document.getElementById('right-radio-button');
		
		var leftRadio = document.getElementById('left-radio-button');
		
		//**********************************************************
		// E V E N T S
		//**********************************************************
		
		leftColumn.addEventListener('click', function(event) {
			deleteElement(event);
		});
		
		rightColumn.addEventListener('click', function(event) {
			deleteElement(event);
		});
		
		buttonAdd.addEventListener('click', function(event) {
			var text = tbInput.value.trim();
			var target;
			if (!text) {
				return;
			}
			if (leftRadio.checked) {
				target = leftColumn.lastChild;
			} else if (rightRadio.checked) {
				target = rightColumn.lastChild;
			}
			addEntry(target, text);
		});
		
		//**********************************************************
		// F U N C T I O N S
		//**********************************************************
		function addEntry(parent, text) {
			var li = document.createElement('li');
			li.className += "entry";
			
			var text = document.createTextNode(text);
			
			var img = document.createElement('img');
			img.className += "delete";
			img.setAttribute("src", "./imgs/Remove-icon.png");
			
			li.appendChild(text);
			li.appendChild(img);
			parent.appendChild(li);
		}
		
		function deleteElement(event) {
			var that = event.target;
			if (that.className.indexOf("delete") >= 0) {
				tbInput.value = that.parentNode.firstChild.textContent
				that.parentNode.parentNode.removeChild(that.parentNode);
			}
		}
		
		
		return this;
	};
}

// SUBMIT THE CODE ABOVE THIS LINE

if(typeof module !== 'undefined') {
	module.exports = solve;
}
