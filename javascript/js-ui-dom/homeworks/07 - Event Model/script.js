/* globals $ */

/* 

Create a function that takes an id or DOM element and:
  

*/

function solve(){
  return function (selector) {
    
    if (typeof selector === "string") {
      selector = document.getElementById(selector);
      if (!selector) {
        throw new Error("no element with such ID");
      }
    } else if ( !(selector instanceof HTMLElement) ) {
      throw new Error("not an HTMLElement");
    }

    var btns = selector.getElementsByClassName("button");
    var contents = selector.getElementsByClassName("content");

    for (var i = 0, len = btns.length; i < len; i += 1) {
      btns[i].textContent = "hide";
      
      btns[i].addEventListener("click", function(event) {
        var that = event.target;
        var next = findNextContent(that);

        function findNextContent(target) {
          var next = target.nextElementSibling;

          if (!next || next.className === 'button') {
            return null;
          }

          if (next.className === "content") {
            return next;
          }

          return findNextContent(next);
        }

        if (!next || !next.nextElementSibling) {
          return;
        }

        if (next.style.display === "") {
          next.style.display = "none";
          that.textContent = 'show';
        } else {
          next.style.display = "";
          that.textContent = 'hide';
        }
      });
    }
  };
};


module.exports = solve;

var doSmth = solve();

doSmth("root");