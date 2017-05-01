let jsonRequester = (function() {

  let request = function(url, method, options) {
    options = options || {};

    let data = options.data || null;

    let headers = options.headers || {};

    let promise = new Promise(function(resolve, reject) {

      $.ajax({
        url,
        method,
        contentType: "application/json",
        headers,
        data: JSON.stringify(data),
        success: function(response) {
          resolve(response);
        },
        error: function(error) {
          reject(error);
        }
      });

    });
    return promise;
  };

  let getJSON = function(url, options) {
    return request(url, "GET", options);
  };

  let postJSON = function(url, options) {
    return request(url, "POST", options);
  };
  
  let putJSON = function(url, options) {
    return request(url, "PUT", options);
  };

  let del = function(url, options) {
    return request(url, "DELETE", options);
  };

  return {
    get: getJSON,
    post: postJSON,
    put: putJSON,
    delete: del
  }
}());