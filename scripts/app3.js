document.addEventListener("DOMContentLoaded", function () {
  const bodyElement = document.body;
  const images = [
    "url('../img/husky-svgrepo-com.svg')",
    "url('../img/juice-svgrepo-com.svg')",
    "url('../img/lion-svgrepo-com.svg')",
    "url('../img/noodle-svgrepo-com.svg')",
    "url('../img/unicorn-svgrepo-com.svg')",
  ];
  let currentImageIndex = 0; // Начальный индекс текущего изображения

  // Обновление фонового изображения
  function updateBackgroundImage() {
    bodyElement.style.backgroundImage = images[currentImageIndex];
  }

  // Функция для переключения на следующее изображение
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateBackgroundImage();
  }

  // Функция для переключения на предыдущее изображение
  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateBackgroundImage();
  }

  // Назначаем обработчики событий на кнопки
  document.getElementById("nextImage").addEventListener("click", nextImage);
  document.getElementById("prevImage").addEventListener("click", prevImage);

  // Установим начальное фоновое изображение
  updateBackgroundImage();
});
