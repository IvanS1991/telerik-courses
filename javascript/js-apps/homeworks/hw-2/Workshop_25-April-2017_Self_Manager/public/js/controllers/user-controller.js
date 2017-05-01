let userController = (function() {

  let login = function(context) {
    templates.get("user-login")
      .then(function(template) {
        context.$element().html(template());

        $("#btn-login").on("click", function() {
          let userData = {
            username: $("#tb-username").val(),
            password: $("#tb-password").val()
          }

          data.user.login(userData)
            .then(function(response) {
              localStorage.setItem("LOGIN_USERNAME", response.result.username);
              localStorage.setItem("LOGIN_AUTHKEY", response.result.authKey);
              context.redirect("#/");
            }, function(error) {
              console.log(error);
            });
        });
      });
  };

  let register = function(context) {
    templates.get("user-register")
      .then(function(template) {
        context.$element().html(template());

        $("#btn-register").on("click", function() {
          let userData = {
            username: $("#tb-username").val(),
            password: $("#tb-password").val()
          }

          data.user.register(userData)
            .then(function(response) {
              localStorage.setItem("LOGIN_USERNAME", response.result.username);
              localStorage.setItem("LOGIN_AUTHKEY", response.result.authKey);
              context.redirect("#/");
            }, function(error) {
              console.log(error);
            });
        });
      });
  };

  return {
    login,
    register
  } 
}());