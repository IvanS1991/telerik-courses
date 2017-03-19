/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/
function solve() {
  return function (selector) {
    var $selector,
        btns,
        contents;

    if (typeof selector !== 'string') {
      throw new Error('selector must be string');
    }

    $selector = $(selector);

    if (!$selector.length) {
      throw new Error('no such element');
    }

    $btns = $selector.children('.button');

    $btns
        .text('hide')
        .on('click', function(event) {
          var nextContent = findNext(event.target);
          
          function findNext(target) {
            var next = $(target).next();
            if (!next || next.hasClass('button')) {
              return;
            }
            if (next.hasClass('content')) {
              return next;
            }  
            return findNext(next);
          }

          if (!nextContent.length || !nextContent.next().length) {
            return;
          }

          if (nextContent.css('display') === 'none') {
            nextContent.css('display', '');
            $(event.target).text('hide');
          } else {
            nextContent.css('display', 'none');
            $(event.target).text('show');
          }
        })
  };
};

module.exports = solve;