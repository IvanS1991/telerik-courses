function solve() {
    $.fn.datepicker = function () {
        var MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var WEEK_DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

        Date.prototype.getMonthName = function () {
            return MONTH_NAMES[this.getMonth()];
        };

        Date.prototype.getDayName = function () {
            return WEEK_DAY_NAMES[this.getDay()];
        };

        // you are welcome :)
        var date = new Date();

        var $mainDiv = $("body>div");
        
        var $container = $("<div/>")
                .addClass("datepicker-wrapper");

        var $input = $("#date")
                .addClass("datepicker");

        var $picker = $("<div/>")
                .addClass("picker");

        var $upper = $("<div/>")
                .addClass("controls");

        var $middle = $("<div/>")
                .addClass("current-month");

        var $bottom = $("<div/>")
                .addClass("current-date");

        $picker.append($upper)
                .append($middle)
                .append($bottom);

        $container.append($input)
                .append($picker);

        $mainDiv.append($container)
                .on("click", function(event) {
                    var $target = $(event.target);
                    if ($target.hasClass("datepicker")) {
                        console.log($target);
                        $target.next().show();
                    }
                })
    };
}

module.exports = solve;