const minInput = document.querySelector('.min.input-ranges');
const maxInput = document.querySelector('.max.input-ranges');
const minValueDisplay = document.getElementById('minValue');
const maxValueDisplay = document.getElementById('maxValue');

// Функция для обновления значений
function updateValues() {
    const minValue = minInput.value;
    const maxValue = maxInput.value;

    // Обновление отображаемых значений
    minValueDisplay.textContent = `${minValue}`;
    maxValueDisplay.textContent = `${maxValue}`;
}

// Слушатели событий для ползунков
minInput.addEventListener('input', updateValues);
maxInput.addEventListener('input', updateValues);

// Инициализация значений при загрузке страницы
updateValues();