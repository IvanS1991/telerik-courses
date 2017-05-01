let homeController = (function() {

  let all = function(context) {
    templates.get("home")
      .then(function(template) {
        context.$element().html(template());
      });
  };

  return {
    all
  }
}());