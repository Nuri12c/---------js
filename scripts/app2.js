document.addEventListener("DOMContentLoaded", function () {
  const bodyElement = document.body;
  const colors = ["#6ce692", "#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6"];
  let currentColorIndex = 0; // Начальный индекс текущего цвета

  // Обновление цвета фона
  function updateBackgroundColor() {
    bodyElement.style.backgroundColor = colors[currentColorIndex];
  }

  // Функция для переключения на следующий цвет
  function nextColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    updateBackgroundColor();
  }

  // Функция для переключения на предыдущий цвет
  function prevColor() {
    currentColorIndex = (currentColorIndex - 1 + colors.length) % colors.length;
    updateBackgroundColor();
  }

  // Назначаем обработчики событий на кнопки
  document.getElementById("nextColor").addEventListener("click", nextColor);
  document.getElementById("prevColor").addEventListener("click", prevColor);

  // Установим начальный цвет фона
  updateBackgroundColor();
});
