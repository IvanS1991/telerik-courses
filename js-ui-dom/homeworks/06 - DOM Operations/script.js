var something = document.getElementById('something');
var div = document.getElementsByTagName('div')[0];

/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

function solve () {

  return function addElement(element, contents) {
  // element - string(id) or object(element)
  if (!element || !contents) {
    throw new Error("you must pass all arguments");
  }
  if (typeof element !== "string" && (typeof element !== "object" || !(element instanceof HTMLElement))) {
    throw new Error("you must pass a string or dom element as first parameter");
  }
  if ( !Array.isArray(contents) ) {
    throw new Error("you must pass an array of contents as second parameter");
  }

  function constructFragment(contents) {
    var frag = document.createDocumentFragment();
    var div;
    for (var i = 0, len = contents.length; i < len; i += 1) {
      if (typeof contents[i] !== "number" && typeof contents[i] !== "string") {
        throw new Error("contents must be numbers or strings");
      }
      div = document.createElement('div');
      div.innerHTML = contents[i];
      frag.appendChild(div);
    }
    return frag;
  }

  var frag = constructFragment(contents);

  if (typeof element === "string") {
    element = document.getElementById(element);
    if (!element) {
      throw new Error("no element with such id");
    }
  }
  element.innerHTML = "";
  element.appendChild(frag);
};
};

module.exports = solve;

addElement('root', [5, 6, 7, 8]);
addElement(div, [1, 2, 3, 4]);