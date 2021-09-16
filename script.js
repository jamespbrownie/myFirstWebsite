
// //Buttons stored in variables
const aboutMeButton = document.getElementById("button1")
const collagesButton = document.getElementById("button2")
const bigDayButton = document.getElementById("button3")
const picOfMeButton = document.getElementById("button4")

// // Content hidden/shown by buttons  stored in variables
const aboutMe = document.getElementById("buttonContent1");
const collages = document.getElementById("buttonContent2");
const bigDayToday = document.getElementById("buttonContent3");
const picOfMe = document.getElementById("buttonContent4")

//functions to be executed when buttons are clicked
function clickButton1() {
  if (aboutMe.style.display === "none") {
    aboutMe.style.display = "inline-block";
    collages.style.display = "none";
    bigDayToday.style.display = "none";
    picOfMe.style.display = "none";
  } else {
    aboutMe.style.display = "none";
  }
}

function clickButton2() {
  if (collages.style.display === "none") {
    aboutMe.style.display = "none";
    collages.style.display = "inline-block";
    bigDayToday.style.display = "none";
    picOfMe.style.display = "none";
  } else {
    collages.style.display = "none";
  }
}

function clickButton3() {
  if (bigDayToday.style.display === "none") {
    aboutMe.style.display = "none";
    collages.style.display = "none";
    bigDayToday.style.display = "inline-block";
    picOfMe.style.display = "none";
  } else {
    bigDayToday.style.display = "none";
  }
}

function clickButton4() {
  if (picOfMe.style.display === "none") {
    aboutMe.style.display = "none";
    collages.style.display = "none";
    bigDayToday.style.display = "none";
    picOfMe.style.display = "inline-block";
  } else {
    bigDayToday.style.display = "none";
  }
}

//Event Listeners for functions
aboutMeButton.addEventListener('click', function() {
  clickButton1()
});

collagesButton.addEventListener('click', function() {
  clickButton2()
});

bigDayButton.addEventListener('click', function() {
  clickButton3()
});

picOfMeButton.addEventListener('click', function() {
  clickButton4()
});





//Slideshow 

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
