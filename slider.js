// Define an array of image URLs for slides
const slides = [
    'car1.jpg',
    'car2.jpg',
    'car3.jpg'
];

// Get the slider image element
const sliderImage = document.getElementById('slider-image');

// Set initial slide index
let currentSlideIndex = 0;

// Function to change slide
function changeSlide() {
    // Update image source with the next slide URL
    sliderImage.src = slides[currentSlideIndex];

    // Increment slide index
    currentSlideIndex++;

    // Reset slide index if it exceeds the length of the slides array
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
}

// Change slide every 3 seconds (3000 milliseconds)
setInterval(changeSlide, 3000);

let slideIndex = 0;
const slide = document.getElementsByClassName('car-slide');
const totalSlides = slide.length;

function showSlides() {
  if (slideIndex >= totalSlides) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = totalSlides - 1; }
  // Calculate the transform property value
  let offset = -slideIndex * (100 / 3);
  document.querySelector('.car-slider').style.transform = `translateX(${offset}%)`;
}

function moveSlider(n) {
  slideIndex += n;
  showSlides();
}

// Initial call to set the first batch of slides
showSlides();
