/* globals $ */

function solve() {
  
  return function (selector) {
    var template = [
      '<table class="items-table">',
      '<thead>',
      '<tr>',
      '<th>#</th>',
      '{{#headers}}',
      '<th>{{this}}</th>',
      '{{/headers}}',
      '</tr>',
      '</thead>',
      '<tbody>',
      '{{#items}}',
      '<tr>',
      '<td>{{@index}}</td>',
      '<td>{{col1}}</td> ',
      '<td>{{col2}}</td>',
      '<td>{{col3}}</td>',
      '</tr>',
      '{{/items}}',
      '</tbody>',
      '</table>'
    ].join('\n'); /* insert the template here as a string
        example:
        var template =
          '<ul>' +
            '{{#students}}' +
            '<li>' +
              '{{name}}' +
            '</li>' +
            '{{/students}}' +
          '</ul>';
    */

    $(selector).html(template);
  };
};

module.exports = solve;