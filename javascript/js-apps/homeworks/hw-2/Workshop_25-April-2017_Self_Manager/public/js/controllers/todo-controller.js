let todoController = (function() {

  let all = function(context) {
    let todoData;
    data.todo.all()
      .then(function(response) {
        todoData = response.result;
        console.log(todoData);
        return templates.get("todos");
      })
      .then(function(template) {
        context.$element().html(template(todoData));
      });
  };

  let create = function(context) {
    templates.get("todos-add")
      .then(function(template) {
        context.$element().html(template());

        $("#btn-todo-add").on("click", function() {
          let todoData = {
            text: $("#tb-todo-text").val(),
            category: $("#tb-todo-category").val()
          };

          data.todo.create(todoData)
            .then(function(response) {
              alert("Todo created successfuly");
              document.location.hash = "#/todos";
            }, function(error) {
              alert("Something went wrong");
            });
        });
      });
  };

  return {
    all,
    create
  }
}());