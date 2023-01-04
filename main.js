/* ------ GENERAL ACTIONS -------- */

/* ------ PLAY VIDEO IN LOOP-------- */
window.addEventListener('load', function(){
  var newVideo = document.getElementById('video');
  newVideo.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
  }, false);

  newVideo.play();

});

/* ------ CARROUSEL ACTIONS -------- */

"use strict";
// Select all slides
const slides = document.querySelectorAll('.slide');

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector('.btn-next');
console.log(slides);
console.log(nextSlide);
// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener('click', function () {

  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector('.btn-prev');

// add event listener and navigation functionality
prevSlide.addEventListener('click', function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

/* ------ CONTACT FORM ACTION -------- */

$(document).ready(function() {
  // contact form animations
  $('#contact').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
});
