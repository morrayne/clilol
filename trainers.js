const modal = document.getElementById("trainerModal");
const closeBtn = document.querySelector(".close");

const trainers = {
  1: {
    name: "Иванов Иван Иванович",
    position: "Главный тренер",
    experience: "Опыт: 12 лет",
    description: "Мастер спорта, обучал юношеские сборные, эксперт по тактике.",
  },
  2: {
    name: "Петров Петр Петрович",
    position: "Тренер по физподготовке",
    experience: "Опыт: 8 лет",
    description: "Специалист по общей и специальной физподготовке.",
  },
  3: {
    name: "Сидоров Сергей Сергеевич",
    position: "Ассистент тренера",
    experience: "Опыт: 5 лет",
    description:
      "Помогает в индивидуальных тренировках и работе с юными игроками.",
  },
};

document.querySelectorAll(".trainer-card").forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-id");
    const trainer = trainers[id];

    document.getElementById("trainerName").innerText = trainer.name;
    document.getElementById("trainerPosition").innerText = trainer.position;
    document.getElementById("trainerExperience").innerText = trainer.experience;
    document.getElementById("trainerDescription").innerText =
      trainer.description;

    modal.style.display = "block";
  });
});

closeBtn.onclick = () => (modal.style.display = "none");

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
