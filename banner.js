let banner = document.querySelector(".banner");
let bannerImg = document.querySelector(".banner").querySelectorAll("img");
const bannerImgAmmount = bannerImg.length;
let bannerButtonData = {
  count: 1,
  margin: 24,
};

for (let i = 0; i < bannerImgAmmount; i++) {
  let button = document.createElement("button");
  button.style.left = `${bannerButtonData.margin * i + 20}px`;
  button.value = i;
  banner.appendChild(button);
}

banner.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const slideIndex = parseInt(event.target.value);
    bannerImg.forEach((img) => {
      img.style.transform = `translateX(-${slideIndex * 274}px)`;
    });
  }
});
