// Аккордеон
document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const accordionItem = this.parentElement;
      const accordionBody = this.nextElementSibling;
      const isOpen = accordionBody.classList.contains("open");

      // Закрываем все аккордеоны
      closeAllAccordions();

      // Открываем текущий если он был закрыт
      if (!isOpen) {
        openAccordion(accordionItem, accordionBody, this);
      }
    });
  });

  function closeAllAccordions() {
    document.querySelectorAll(".accordion-body").forEach((body) => {
      body.classList.remove("open");
      body.style.maxHeight = null;
    });

    document.querySelectorAll(".accordion-header").forEach((header) => {
      header.classList.remove("active");
    });
  }

  function openAccordion(item, body, header) {
    body.classList.add("open");
    header.classList.add("active");
    body.style.maxHeight = body.scrollHeight + "px";
  }

  // Закрытие при клике вне аккордеона
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".accordion-item")) {
      closeAllAccordions();
    }
  });
});

// Остальной код (слайдеры, форма, тема)...

// Слайдер отзывов
let currentReviewSlide = 0;
const reviewSlides = document.querySelectorAll(".reviews-slider .slide");
const reviewDotsContainer = document.querySelector(".slider-dots");

// Создаем точки для слайдера
if (reviewDotsContainer && reviewSlides.length > 0) {
  reviewSlides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToReviewSlide(i));
    reviewDotsContainer.appendChild(dot);
  });
}

const reviewDots = document.querySelectorAll(".slider-dots .dot");

function showReviewSlide(n) {
  reviewSlides.forEach((s) => s.classList.remove("active"));
  reviewDots.forEach((d) => d.classList.remove("active"));

  reviewSlides[n].classList.add("active");
  reviewDots[n].classList.add("active");
  currentReviewSlide = n;
}

function nextReviewSlide() {
  const nextSlide = (currentReviewSlide + 1) % reviewSlides.length;
  showReviewSlide(nextSlide);
}

function prevReviewSlide() {
  const prevSlide =
    (currentReviewSlide - 1 + reviewSlides.length) % reviewSlides.length;
  showReviewSlide(prevSlide);
}

function goToReviewSlide(index) {
  showReviewSlide(index);
}

// Навигация слайдера отзывов
document
  .querySelector(".slider-next")
  ?.addEventListener("click", nextReviewSlide);
document
  .querySelector(".slider-prev")
  ?.addEventListener("click", prevReviewSlide);

// Автопереключение отзывов
let reviewAutoSlideInterval;

function startReviewAutoSlide() {
  reviewAutoSlideInterval = setInterval(nextReviewSlide, 5000);
}

function stopReviewAutoSlide() {
  clearInterval(reviewAutoSlideInterval);
}

function resetReviewAutoSlide() {
  stopReviewAutoSlide();
  startReviewAutoSlide();
}

// Останавливаем автослайд при взаимодействии
document
  .querySelector(".reviews-slider")
  ?.addEventListener("mouseenter", stopReviewAutoSlide);
document
  .querySelector(".reviews-slider")
  ?.addEventListener("mouseleave", startReviewAutoSlide);

// Запускаем автослайд
if (reviewSlides.length > 1) {
  startReviewAutoSlide();
}

// Форма обратной связи
document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get("name");

    // Имитация отправки
    const message = `Спасибо, ${name}! Мы свяжемся с вами в ближайшее время.`;

    // Можно добавить реальную отправку на сервер здесь
    console.log("Данные формы:", Object.fromEntries(formData));

    // Показываем сообщение об успехе
    alert(message);
    this.reset();
  });

// Плавная прокрутка для навигационных ссылок
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
