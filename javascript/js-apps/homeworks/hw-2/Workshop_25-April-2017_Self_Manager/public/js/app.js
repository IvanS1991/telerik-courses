window.onload = function() {
  let sammyApp = Sammy("#content", function() {

    this.get("#/", function(context) {
      context.redirect("#/home");
    });

    this.get("#/home", homeController.all);

    this.get("#/todos", todoController.all);
    this.get("#/todos/add", todoController.create);

    this.get("#/events", eventController.all);
    this.get("#/events/add", eventController.create);

    this.get("#/user/login", userController.login);
    this.get("#/user/register", userController.register);

  });

  sammyApp.run("#/");

  $(window).on("hashchange", function() {
    templates.get("login-control")
      .then(function(template) {
        $("#login-control").html(template(localStorage));
        $("#btn-logout").on("click", function() {
          localStorage.clear();
          location.hash = "/";
        });
      });
  }); 
};