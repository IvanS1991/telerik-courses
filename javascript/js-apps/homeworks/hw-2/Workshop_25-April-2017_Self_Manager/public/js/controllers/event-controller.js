let eventController = (function() {

  let all = function(context) {
    templates.get("events")
      .then(function(template) {
        context.$element().html(template());
      });
  }; 

  let create = function(context) {
    templates.get("events-add")
      .then(function(template) {
        context.$element().html(template());

        $("#btn-event-add").on("click", function() {
          let eventData = {
            title: $("#tb-event-title").val(),
            category: $("#tb-event-category").val(),
            description: $("#tb-event-description").val(),
            users: $("#tb-event-users").val()
          };
        });
      });
  };

  return {
    all,
    create
  }
}());