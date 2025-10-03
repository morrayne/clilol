const burgerMenu = {
  bar: document.querySelector(".navigation"),
  elem: document.querySelector(".navigation img"),
  text: document.querySelector(".navigation .nav-list"),
};

const burgerMenuState = {
  isOpen: false,
  closedWidth: 64,
  openedWidth: 196,
};

if (burgerMenu.elem && burgerMenu.bar && burgerMenu.text) {
  burgerMenu.elem.addEventListener("click", toggleBurgerMenu);
}

function toggleBurgerMenu() {
  burgerMenuState.isOpen = !burgerMenuState.isOpen;
  if (burgerMenuState.isOpen) {
    openBurgerMenu();
    burgerMenu.elem.src = "./res/burger-menu-close.svg";
  } else {
    closeBurgerMenu();
    burgerMenu.elem.src = "./res/burger-menu.svg";
  }
}

function openBurgerMenu() {
  burgerMenu.bar.style.width = `${burgerMenuState.openedWidth}px`;
  showBurgerMenuText(true);
}

function closeBurgerMenu() {
  burgerMenu.bar.style.width = `${burgerMenuState.closedWidth}px`;
  showBurgerMenuText(false);
}

function showBurgerMenuText(show) {
  if (show) {
    burgerMenu.text.style.display = "flex";
    setTimeout(() => {
      burgerMenu.text.style.opacity = "1";
    }, 200);
  } else {
    burgerMenu.text.style.opacity = "0";
    setTimeout(() => {
      burgerMenu.text.style.display = "none";
    }, 200);
  }
}

closeBurgerMenu();

// Аккордеон
document.querySelectorAll(".accordion-header").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Закрываем все открытые аккордеоны
    const allBodies = document.querySelectorAll(".accordion-body");
    const allHeaders = document.querySelectorAll(".accordion-header");

    allBodies.forEach((body) => {
      if (body !== btn.nextElementSibling) {
        body.classList.remove("open");
      }
    });

    allHeaders.forEach((header) => {
      if (header !== btn) {
        header.classList.remove("active");
      }
    });

    // Переключаем текущий аккордеон
    const body = btn.nextElementSibling;
    body.classList.toggle("open");
    btn.classList.toggle("active");
  });
});

// Закрытие при клике вне аккордеона (опционально)
document.addEventListener("click", (e) => {
  if (!e.target.closest(".accordion-item")) {
    document.querySelectorAll(".accordion-body").forEach((body) => {
      body.classList.remove("open");
    });
    document.querySelectorAll(".accordion-header").forEach((header) => {
      header.classList.remove("active");
    });
  }
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
function showSlide(n) {
  slides.forEach((s) => s.classList.remove("active"));
  slides[n].classList.add("active");
}
document.querySelector(".next-section").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});
document.querySelector(".prev-section").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent =
    "Спасибо! Мы свяжемся с вами.";
  this.reset();
});

const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {
  themeToggle.classList.add("dark");
  themeToggle.lastElementChild.src = "./images/icons/moon.svg";
});
