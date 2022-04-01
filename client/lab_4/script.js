let slidePosition = 0;
const slides = document.querySelectorAll('.carousel__item');
const slidesArray = Array.from(slides);
const totalSlides = slidesArray.length;

function updateSlidePosition() {
  slidesArray.forEach((slide) => {
    console.log(slide);
    slide.classList.remove('visible');
    slide.classList.add('hidden');
  });
  slides[slidePosition].classList.add('visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition += 1;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition -= 1;
  }
  updateSlidePosition();
}

document.
  querySelector('button#next')
  .addEventListener('click', () => {
    console.log('clicked next');
    moveToNextSlide();
  });
document.
  querySelector('button#prev')
  .addEventListener('click', () => {
    console.log('clicked prev');
    moveToPrevSlide();
  });