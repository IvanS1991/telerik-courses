function solve() {

	return function(selector, rows, columns) {
		if (rows < 1 || columns < 1) {
			throw "should be greater than 1";
		}
		
		var $selector = $(selector);
		
		var $table = $('<table/>').addClass('spreadsheet-table');
		var $row;
		var $th;
		var $td;
		var $tdList;
		var $thList;
		var $inputList;
		
		for (var i = 0; i <= rows; i += 1) {
			$row = $('<tr/>');
			for (var j = 0; j <= columns; j += 1) {
				if (i === 0 || j === 0) {
					$th = $('<th/>')
							.addClass('spreadsheet-item')
							.addClass('spreadsheet-header')
							.attr('row-index', i)
							.attr('col-index', j);;
					$row.append($th);
					if (i >= 1 && j === 0) {
						$th.text(i);
					}
					if (i === 0 && j >= 1) {
						$th.text(String.fromCharCode(65 + j - 1));
					}
				} else {
					$td = $('<td/>')
							.addClass('spreadsheet-item')
							.addClass('spreadsheet-cell')
							.attr('row-index', i)
							.attr('col-index', j);
					$td.append($('<input/>'));
					$td.append($('<span/>'));
					$row.append($td);
				}
			}
			$table.append($row);
		}
		
		$selector.append($table);
		
		$tdList = $('td');
		$thList = $('th');
		$inputList = $('input');
		
		$table.on('click', function(event) {
			var $that = $(event.target);
			var rowHeader;
			var colHeader;
			var cells;
			var headers
			if (event.target.localName === "span") {
				$that = $that.parents('td');
			}
			if (event.target.tagName === "td") {
				clearSelection();
				$that.addClass('selected');
				rowHeader = $table.find('th[row-index="' + $that.attr('row-index') + '"]');
				colHeader = $table.find('th[col-index="' + $that.attr('col-index') + '"]');
				rowHeader.addClass('selected');
				colHeader.addClass('selected');
			}
			if (event.target.tagName === "TH") {
				clearSelection();
				if ($that.attr('row-index') === "0" && $that.attr('col-index') !== "0") {
					cells = $table.find('td[col-index="' + $that.attr('col-index') + '"]');
					headers = $table.find('th[col-index="0"]');
				} else if ($that.attr('col-index') === "0"&& $that.attr('row-index') !== "0") {
					cells = $table.find('td[row-index="' + $that.attr('row-index') + '"]');
					headers = $table.find('th[row-index="0"]');
				} else if ($that.attr('col-index') === "0" && $that.attr('row-index') === "0") {
					cells = $table.find('td, th');
				}
				if (headers) {
					headers.addClass('selected');
					$(headers[0]).removeClass('selected');
				}
				$that.addClass('selected');
				cells.addClass('selected');
			}
		});
		
		$table.on('dblclick', function(event) {
			var $that = $(event.target);
			if (event.target.tagName === "SPAN") {
				$that = $that.parents('td');
			}
			$that.addClass('editing');
			$that.children('input').focus().val($that.children('span').text());
		});
		
		$inputList.on('blur', function(event) {
			var $this = $(this);
			var $parent = ($this.parent());
			$parent.removeClass('editing');
			$parent.children('span').text($this.val());
			$this.val("");
		});
		
		function clearSelection() {
			$tdList.removeClass('selected');
			$thList.removeClass('selected');
		}
	};
}

// SUBMIT THE CODE ABOVE THIS LINE

if(typeof module !== 'undefined') {
	module.exports = solve;
}
