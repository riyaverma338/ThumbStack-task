var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// var navbar = document.querySelector('nav')

// window.onscroll = function() {

//   // pageYOffset or scrollY
//   if (window.pageYOffset > 0) {
//     navbar.classList.add('scrolled')
//   } else {
//     navbar.classList.remove('scrolled')
//   }
// }

const myFunction = () => {
  document.querySelector(".first").style.display ='block';
  document.querySelector(".second").style.display ='block';
  document.querySelector(".third").style.display ='block';
  document.querySelector(".fourth").style.display ='block';
  document.querySelector(".fifth").style.display ='block';
  document.querySelector(".sixth").style.display ='block';

}

const myFunction2 = () => {
  document.querySelector(".second").style.display ='block';
  document.querySelector(".first").style.display ='none';
  document.querySelector(".third").style.display ='none';
  document.querySelector(".fourth").style.display ='block';
  document.querySelector(".fifth").style.display ='block';
  document.querySelector(".sixth").style.display ='block';
}

const myFunction3 = () => {
  document.querySelector(".third").style.display ='block';
  document.querySelector(".first").style.display ='none';
  document.querySelector(".second").style.display ='block';
  document.querySelector(".fourth").style.display ='block';
  document.querySelector(".fifth").style.display ='block';
  document.querySelector(".sixth").style.display ='block';
}

const myFunction4 = () => {
  document.querySelector(".third").style.display ='block';
  document.querySelector(".first").style.display ='none';
  document.querySelector(".second").style.display ='none';
  document.querySelector(".fourth").style.display ='block';
  document.querySelector(".fifth").style.display ='block';
  document.querySelector(".sixth").style.display ='block';
}
const myFunction5 = () => {
  document.querySelector(".third").style.display ='block';
  document.querySelector(".first").style.display ='none';
  document.querySelector(".second").style.display ='none';
  document.querySelector(".fourth").style.display ='none';
  document.querySelector(".fifth").style.display ='block';
  document.querySelector(".sixth").style.display ='block';
 
}
const myFunction6 = () => {
  document.querySelector(".third").style.display ='block';
  document.querySelector(".first").style.display ='block';
  document.querySelector(".second").style.display ='block';
  document.querySelector(".fourth").style.display ='none';
  document.querySelector(".fifth").style.display ='none';
  document.querySelector(".sixth").style.display ='none';
}