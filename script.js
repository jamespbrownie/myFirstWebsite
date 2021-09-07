//Buttons
const aboutMe = document.getElementsById("button1")
const collages = document.getElementsById("button2")
const button3 = document.getElementsById("button3")


aboutMe.addEventListener('click', function() {
  aboutMe.style.display = "flex";
  collages.style.display = 'none'
})
function clickButton1() {
  var x = document.getElementById("buttonContent1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function clickButton2() {
  var x = document.getElementById("buttonContent2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function clickButton3() {
  var x = document.getElementById("buttonContent3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//Slideshow Gallery for button2 //
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1} //restarts at 1 after the last slide
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}
