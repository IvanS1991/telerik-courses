let getLocation = function(selector) {
	if (typeof selector !== "string") {
		throw new Error("selector must be a valid CSS selector passed as a string");
	}
	
	selector = document.querySelector(selector);

	selector.innerHTML = "";

	let parseData = function(data) {
		return {
			latitude: data.coords.latitude,
			longitude: data.coords.longitude
		}
	}

	let displayPosition = function(pos) {
		var map = document.createElement('img');
		map.src = `http://maps.googleapis.com/maps/api/staticmap?center=${pos.latitude},${pos.longitude}&zoom=18&size=600x600&maptype=roadmap&markers=${pos.latitude},${pos.longitude}&sensor=false`;
		selector.appendChild(map);
	}

	// PROMISE
	let promise = new Promise(function(resolve, reject) {
		navigator.geolocation.getCurrentPosition(function(data) {
			resolve(data);
		});
	})
			.then(function(data) {
				return parseData(data);
			})
			.then(function(position) {
				displayPosition(position);
			});
}

let popupRedirect = function(url) {

	let popup = document.createElement('div');
	popup.className += " pop-up";
	popup.textContent = `Redirecting to: ${url}`;

	let counter = document.createElement('div');
	counter.className += " time-counter";
	counter.textContent = "0.0 s";

	popup.appendChild(counter);
	document.body.appendChild(popup);

	// PROMISE
	let promise = new Promise(function(resolve, reject) {
		var start = new Date();
		setInterval(function() {
			var now = new Date();
			var timePassed = (now - start) / 1000;
			counter.textContent = `${timePassed} s`;
		}, 1);
		setTimeout(function() {
			popup.className += " hidden";
			resolve();
		}, 2000);
	})
			.then(function() {
				window.location.href = url;
			});
}