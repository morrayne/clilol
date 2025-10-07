let theme = "dark";
let accessible = false;

document.getElementById("changeTheme").addEventListener("click", function () {
  if (theme === "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }
  applyTheme();
});

document.getElementById("changeColor").addEventListener("click", function () {
  accessible = !accessible;
  applyTheme();
});

function applyTheme() {
  const fullTheme = accessible ? `${theme}-accessible` : theme;
  document.documentElement.setAttribute("data-theme", fullTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const themeIcon = document.querySelector(".theme-toggle img");
  if (theme === "light") {
    themeIcon.src = "./common/icons/moon.svg";
    themeIcon.alt = "Переключить на темную тему";
  } else {
    themeIcon.src = "./common/icons/sun.svg";
    themeIcon.alt = "Переключить на светлую тему";
  }
}

// Инициализация при загрузке
document.addEventListener("DOMContentLoaded", function () {
  applyTheme();
});
