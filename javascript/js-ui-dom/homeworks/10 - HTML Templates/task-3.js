function solve(){
	return function(){
		$.fn.listview = function(data){
			var dataTemplateId = "#" + $(this).attr('data-template');

			var hbtemplate = $(dataTemplateId).html();

			var template = handlebars.compile(hbtemplate);

			var current = "";

			for (var i = 0, len = data.length; i < len; i += 1) {
				current = template(data[i]);
				$(this).append(current);
			}

			return this;
		};
	};
}

module.exports = solve;