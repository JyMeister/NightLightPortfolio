
const slides = document.querySelector('.slides');
const imgs = document.querySelectorAll('.slides img');
let index = 0;

function showSlide(i) {
  index = (i + imgs.length) % imgs.length;  // loop around
  slides.style.transform = `translateX(-${index * 100}%)`;
}



// Example: move every 2 seconds

setInterval(() => showSlide(index + 1), 2000);