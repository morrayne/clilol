let theme = "dark";

document.querySelector(".theme-toggle").addEventListener("click", function () {
  if (theme === "dark") {
    theme = "light";
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    theme = "dark";
    document.documentElement.setAttribute("data-theme", "dark");
  }
  
  // Обновляем иконку
  updateThemeIcon();
});

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
document.addEventListener("DOMContentLoaded", function() {
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeIcon();
});