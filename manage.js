const carouselSlide = document.querySelector('.slides');
const images = document.querySelectorAll('.slide');

let counter = 0;
const slideWidth = images[0].clientWidth;

function nextSlide() {
  counter++;

if (counter >= images.length - 1) {
     counter = 0;
    carouselSlide.style.transition = 'none';
    carouselSlide.style.transform = `translateX(0)`;
  } else {
    carouselSlide.style.transform = `translateX(-${slideWidth * counter}px)`;
  }
  setTimeout(() => {
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  }, 50);
}
setInterval(nextSlide, 1000);