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
  } else {
    closeBurgerMenu();
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