//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}


var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShowleft = document.querySelectorAll('.show-on-scroll-left');
var elementsToShowright = document.querySelectorAll('.show-on-scroll-right');
var elementsToShowtop = document.querySelectorAll('.show-on-scroll-top');

 function loopleft() {
    elementsToShowleft.forEach(function (element) {
    if (isElementInViewport(element)) {
        element.classList.add('animated', 'slideInLeft');
    }
    else {
        element.classList.remove('animated', 'slideInLeft');
        }
    });
              
    scroll(loopleft);
}

function loopright() {
    elementsToShowright.forEach(function (element) {
    if (isElementInViewport(element)) {
        element.classList.add('animated', 'slideInRight');
    }
    else {
        element.classList.remove('animated', 'slideInRight');
        }
    });
              
    scroll(loopright);
}

function looptop() {
    elementsToShowtop.forEach(function (element) {
    if (isElementInViewport(element)) {
        element.classList.add('animated', 'slideInDown');
    }
    else {
        element.classList.remove('animated', 'slideInDown');
        }
    });
              
    scroll(looptop);
}

loopleft();
loopright();
looptop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }