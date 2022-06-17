// Scroll 
let lastScrollY = 0;

function onSroll() {
  const nav = document.querySelector('.navbar-link');
  const toTop = document.querySelector('#to-top');
  const STANDARD = 30;
  
  if (window.scrollY > STANDARD) { 
    nav.classList.add('shadow');
    toTop.classList.add('show');
  } else {
    nav.classList.remove('shadow');
    toTop.classList.remove('show');
  } 

	if (window.scrollY > lastScrollY) { 
    nav.classList.add('lift-up');
  } else { 
    nav.classList.remove('lift-up');
  }

  lastScrollY = window.scrollY;
}

window.addEventListener('scroll', onSroll);

var els = document.getElementsByTagName('a');

for (var el = 0; el < els.length; el++) {
    els[el].style["text-decoration"] = "none";
    els[el].style["color"] = "black";
}







//


var dropDown = document.getElementsByClassName("showMore");
var i;

for (i = 0; i < dropDown.length; i++) {
  dropDown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
