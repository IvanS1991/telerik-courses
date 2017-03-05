function solve() {
	
	const validator = {
		validateAppName: function(str) {
			const regex = /[a-zA-Z0-9\s]/;
			const len = str.length;
			if (typeof str !== "string" || len < 1 || len > 24 || str.search(regex) < 0) {
				throw new Error("invalid app name");
			}
		},
		validateDescription: function(str) {
			if (typeof str !== "string") {
				throw new Error("str must be string");
			}
		},
		validateVersion: function(num) {
			if (typeof num !== "number" || num < 0) {
				throw new Error("invalid version");
			}
		},
		validateNewVersion: function(newVer, oldVer) {
			if (newVer <= oldVer) {
				throw new Error("the new version must be above the old one");
			}
		},
		validateRating: function(num) {
			if (typeof num !== "number" || num < 1 || num > 10) {
				throw new Error("invalid rating");
			}
		},
		validateHostName: function(str) {
			if (typeof str !== "string" || str.length < 1 || str.length > 32) {
				throw new Error("hostname is invalid");
			}
		},
		validateAppArray: function(arr) {
			if (!Array.isArray(arr)) {
				throw new Error("you must provide apps in an array");
			}
			for (var i = 0; i < arr.length; i += 1) {
				if ( !(arr[i] instanceof App)) {
					throw new Error("not a valid app");
				}
			}
		}
	}
	
	class App {
		constructor(name, description, version, rating) {
			this.name = name;
			this.description = description;
			this.version = version;
			this.rating = rating;
			this.uploaded = new Date();
		}
		
		set name(val) {
			validator.validateAppName(val);
			
			this._name = val;
		}
		
		get name() {
			return this._name;
		}
		
		set description(val) {
			validator.validateDescription(val);
			
			this._description = val;
		}
		
		get description() {
			return this._description;
		}
		
		set version(val) {
			validator.validateVersion(val);
			
			this._version = val;
		}
		
		get version() {
			return this._version;
		}
		
		set rating(val) {
			validator.validateRating(val);
			
			this._rating = val;
		}
		
		get rating() {
			return this._rating;
		}
		
		release(version) {
			validator.validateVersion(version);
			validator.validateNewVersion(version, this.version);
			
			this.version = version;
		}
		
		release(options) {
			if (!options.hasOwnProperty("version")) {
				throw new Error("version must be defined");
			}
			validator.validateVersion(options.version);
			validator.validateNewVersion(options.version, this.version);
			
			this.version = options.version;
			
			if (options.hasOwnProperty("description")) {
				validator.validateDescription(options.description);
				
				this.description = options.description;
			}
			
			if (options.hasOwnProperty("rating")) {
				validator.validateRating(options.rating);
				
				this.rating = options.rating;
			}
		}
	}
	
	class Store extends App {
		constructor(name, description, version, rating) {
			super(name, description, version, rating);
			this.apps = [];
		}
		
		uploadApp(app) {
			var match;
			if (app instanceof App) {
				match = this.apps.find(x => x.name === app.name);
				if (typeof match === "undefined") {
					this.apps.push(app);
				} else if (typeof match === "object") {
					validator.validateNewVersion(app.version, match.version);
					
					match.version = app.version;
				}
			}
			return this;
		}
		
		takedownApp(name) {
			const match = this.apps.find(x => x.name === name);
			let index;
			if (typeof match === "undefined") {
				throw new Error("no such app in store");
			}
			
			index = this.apps.indexOf(match);
			this.apps.splice(index, 1);
			
			return this;
		}
		
		search(pattern) {
			return this.apps
				.slice()
				.filter(x => x.name.search(pattern) > 0)
				.sort(x => x.name);
		}
		
		listMostRecentApps(count) {
			if (typeof count === "undefined") {
				count = 10;
			}
			
			// TODO ???
			return this.apps
				.slice()
				.reverse()
				.splice(0, count);
		}
		
		listMostPopularApps(count) {
			if (typeof count === "undefined") {
				count = 10;
			}
			
			// TODO ???
			return this.apps
				.slice()
				.sort(function(a, b) {
					return a.rating + b.rating;
				})
				.sort(function(a, b) {
					if (a.rating === b.rating) {
						return a.uploaded + b.uploaded
					}
				})
				.splice(0, count);
		}
	}
	
	class Device {
		constructor(hostname, apps) {
			this.hostname = hostname;
			this.apps = apps;
		}
		
		set hostname(val) {
			validator.validateHostName(val);
			
			this._hostname = val;
		}
		
		get hostname() {
			return this._hostname;
		}
		
		set apps(arr) {
			validator.validateAppArray(arr);
			
			this._apps = arr;
		}
		
		get apps() {
			return this._apps;
		}
		
		search(pattern) {
			// TODO
			return this.apps
				.slice()
				.filter(x => x instanceof Store)
				.map(x => x.apps)
				.reduce((x, y) => x.concat(y))
				.filter(x => x.name.search(pattern) >= 0)
				.sort((a, b) => a.version + b.version)
				.splice(0, 1);	
		}
		
		install(appName) {
			var app = this.apps
				.slice()
				.filter(x => x instanceof Store)
				.map(x => x.apps)
				.reduce((x, y) => x.concat(y))
				.filter(x => x.name.search(appName) >= 0)
				.sort((a, b) => a.version + b.version)
				.splice(0, 1);
				
			var match = this.apps.find(x => x.name === appName);
			// bug?
			if (app.length === 0) {
				//throw new Error("can't find this app in any store");
			}
			
			if (typeof match === "undefined") {
				this.apps.push(app);
			}
			return this;
		}
		
		uninstall(name) {
			var match = this.apps.find(x => x.name === name);
			var index = this.apps.indexOf(match)
			if (typeof match === "object") {
				this.apps.splice(index, 1);
			}
			return this;
		}
		
		listInstalled() {
			return this.apps
				.slice()
				.sort(x => x.name);
		}
		
		update() {
			var app;
			for (var i = 0; i < this.apps.length; i += 1) {
				app = this.search(this.apps[i].name);
				this.apps[i].release(app.version);
			}
			return this;
		}
	}
	
	
	return {
		createApp(name, description, version, rating) {
			return new App(name, description, version, rating);
		},
		createStore(name, description, version, rating) {
			return new Store(name, description, version, rating);
		},
		createDevice(hostname, apps) {
			return new Device(hostname, apps);
		}
	};
}

// Submit the code above this line in bgcoder.com
module.exports = solve;
