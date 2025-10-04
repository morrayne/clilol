// Слайдер баннера
const bannerSlides = document.querySelectorAll(".banner .img-holder img");
const imgHolder = document.querySelector(".banner .img-holder");
const prevBtn = document.querySelector(".banner .prev");
const nextBtn = document.querySelector(".banner .next");
const dotsContainer = document.querySelector(".banner-dots");

let currentBannerSlide = 0;
let bannerAutoSlideInterval;

// Инициализация точек если есть слайды
if (bannerSlides.length > 0 && dotsContainer) {
  bannerSlides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToBannerSlide(i));
    dotsContainer.appendChild(dot);
  });
}

const bannerDots = document.querySelectorAll(".banner-dots .dot");

function updateBannerSlider() {
  if (imgHolder) {
    imgHolder.querySelectorAll("img").forEach(function (el) {
      el.style.transform = `translateX(-${currentBannerSlide * 100}%)`;
    });
  }

  bannerDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentBannerSlide);
  });
}

function nextBannerSlide() {
  currentBannerSlide = (currentBannerSlide + 1) % bannerSlides.length;
  updateBannerSlider();
}

function prevBannerSlide() {
  currentBannerSlide =
    (currentBannerSlide - 1 + bannerSlides.length) % bannerSlides.length;
  updateBannerSlider();
}

function goToBannerSlide(index) {
  currentBannerSlide = index;
  updateBannerSlider();
  resetBannerAutoSlide();
}

// Обработчики для баннера
nextBtn?.addEventListener("click", () => {
  nextBannerSlide();
  resetBannerAutoSlide();
});

prevBtn?.addEventListener("click", () => {
  prevBannerSlide();
  resetBannerAutoSlide();
});

// Автопереключение баннера
function startBannerAutoSlide() {
  if (bannerSlides.length > 1) {
    bannerAutoSlideInterval = setInterval(nextBannerSlide, 4000);
  }
}

function stopBannerAutoSlide() {
  clearInterval(bannerAutoSlideInterval);
}

function resetBannerAutoSlide() {
  stopBannerAutoSlide();
  startBannerAutoSlide();
}

// Останавливаем автослайд при наведении
const banner = document.querySelector(".banner");
banner?.addEventListener("mouseenter", stopBannerAutoSlide);
banner?.addEventListener("mouseleave", startBannerAutoSlide);

// Инициализация
if (bannerSlides.length > 0) {
  updateBannerSlider();
  startBannerAutoSlide();
}
