let templates = (function() {

  let base = "../templates/";
  let ext = ".handlebars";

  let get = function(name) {
    let url = `${base}${name}${ext}`;
    let promise = new Promise(function(resolve, reject) {
      $.get(url, function(template) {
        resolve(Handlebars.compile(template));
      });
    });
    return promise;
  };

  return {
    get
  }
}());