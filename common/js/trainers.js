// Данные тренеров
const trainersData = {
  1: {
    name: "Иванов Иван Иванович",
    position: "Главный тренер",
    experience: "Опыт: 12 лет",
    image: "./common/images/dawg.jpg",
    skills: ["Тактика", "Техника", "UEFA Pro"],
    description: "Профессиональный тренер с лицензией UEFA Pro. Более 12 лет опыта работы с юношескими командами. Специализируется на тактической подготовке и индивидуальной работе с игроками.",
    achievements: [
      "Лицензия UEFA Pro",
      "Мастер спорта по футболу",
      "Тренер года 2020 по версии РФС",
      "Подготовил 5 игроков для молодежных сборных"
    ]
  },
  2: {
    name: "Петров Петр Петрович",
    position: "Тренер по физподготовке",
    experience: "Опыт: 8 лет",
    image: "./common/images/dawg.jpg",
    skills: ["Физподготовка", "Реабилитация", "Фитнес"],
    description: "Сертифицированный специалист по физической подготовке. Работал с профессиональными клубами. Специализируется на развитии скоростно-силовых качеств.",
    achievements: [
      "Сертификат FIFA по физической подготовке",
      "Высшее образование в области спортивной медицины",
      "Опыт работы в ФНЛ",
      "Автор методики по предотвращению травм"
    ]
  },
  3: {
    name: "Сидоров Сергей Сергеевич",
    position: "Ассистент тренера",
    experience: "Опыт: 5 лет",
    image: "./common/images/dawg.jpg",
    skills: ["Работа с youth", "Техника", "UEFA A"],
    description: "Молодой перспективный тренер с лицензией UEFA A. Специализируется на работе с детскими группами и развитии технических навыков.",
    achievements: [
      "Лицензия UEFA A",
      "Победитель молодёжного тренерского конкурса",
      "Специализация по работе с детьми 6-12 лет",
      "Футбольное образование в Испании"
    ]
  }
};

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', function() {
  initTrainersPage();
});

function initTrainersPage() {
  // Обработчики для кнопок "Подробнее"
  document.querySelectorAll('.more-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const trainerCard = this.closest('.trainer-card');
      const trainerId = trainerCard.dataset.id;
      openTrainerModal(trainerId);
    });
  });

  // Обработчики для модального окна
  const modal = document.getElementById('trainerModal');
  const closeBtn = modal.querySelector('.close');
  
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Обработчик формы в модалке
  document.getElementById('trainerContactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    submitTrainerForm(this);
  });

  // Закрытие по ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

function openTrainerModal(trainerId) {
  const trainer = trainersData[trainerId];
  if (!trainer) return;

  const modal = document.getElementById('trainerModal');
  
  // Заполняем данные
  document.getElementById('trainerModalName').textContent = trainer.name;
  document.getElementById('trainerModalPosition').textContent = trainer.position;
  document.getElementById('trainerModalExperience').textContent = trainer.experience;
  document.getElementById('trainerModalImage').src = trainer.image;
  document.getElementById('trainerModalImage').alt = trainer.name;
  document.getElementById('trainerModalDescription').textContent = trainer.description;
  
  // Заполняем навыки
  const skillsContainer = document.getElementById('trainerModalSkills');
  skillsContainer.innerHTML = '';
  trainer.skills.forEach(skill => {
    const skillTag = document.createElement('span');
    skillTag.className = 'skill-tag';
    skillTag.textContent = skill;
    skillsContainer.appendChild(skillTag);
  });

  // Заполняем достижения
  const achievementsContainer = document.getElementById('trainerModalAchievements');
  achievementsContainer.innerHTML = '';
  trainer.achievements.forEach(achievement => {
    const li = document.createElement('li');
    li.textContent = achievement;
    achievementsContainer.appendChild(li);
  });

  // Устанавливаем ID тренера в скрытое поле
  document.getElementById('selectedTrainerId').value = trainerId;

  // Показываем модальное окно
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('trainerModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function submitTrainerForm(form) {
  const formData = new FormData(form);
  const trainerId = formData.get('trainer_id');
  const trainerName = trainersData[trainerId]?.name || 'тренеру';
  
  // Имитация отправки
  console.log('Данные формы:', {
    trainer: trainerName,
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    age_group: formData.get('age_group')
  });

  // Показываем сообщение об успехе
  alert(`Спасибо! Ваша заявка записаться к ${trainerName} отправлена. Мы свяжемся с вами в ближайшее время.`);
  
  // Закрываем модалку и сбрасываем форму
  closeModal();
  form.reset();
}

// Плавная прокрутка для CTA секции
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});