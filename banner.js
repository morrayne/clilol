const slides = document.querySelectorAll(".banner .img-holder img");
const imgHolder = document.querySelector(".banner .img-holder");
const prevBtn = document.querySelector(".banner .prev");
const nextBtn = document.querySelector(".banner .next");
const dotsContainer = document.querySelector(".banner .dots");

let currentSlide = 0;
let autoSlideInterval;

slides.forEach((_, i) => {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("button");

function updateSlider() {
  imgHolder.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});
prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 4000);
}
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}
function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

updateSlider();
startAutoSlide();
