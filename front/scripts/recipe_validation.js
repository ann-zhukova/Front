document.getElementById('recipeForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Сброс ошибок
    document.getElementById('nameError').textContent = '';
    document.getElementById('ingredientsError').textContent = '';
    document.getElementById('timeError').textContent = '';
    document.getElementById('instructionsError').textContent = '';

    // Валидация названия рецепта
    const recipeName = document.getElementById('recipeName').value.trim();
    if (recipeName === '') {
        document.getElementById('nameError').textContent = 'Пожалуйста, введите название рецепта.';
        isValid = false;
    }

    // Валидация ингредиентов
    const ingredients = document.getElementById('ingredients').value.trim();
    const ingredientsArray = ingredients.split(';').map(item => item.trim());
    if (ingredients === '' || ingredientsArray.length === 0 || ingredientsArray.some(item => item === '')) {
        document.getElementById('ingredientsError').textContent = 'Пожалуйста, введите хотя бы одно слово или ингредиенты через точку с запятой.';
        isValid = false;
    }

    // Валидация времени приготовления
    const time = document.getElementById('time').value;
    if (time <= 0) {
        document.getElementById('timeError').textContent = 'Время приготовления должно быть положительным числом.';
        isValid = false;
    }

    // Валидация шагов приготовления
    const textareas = document.getElementsByClassName('step-textarea');
    let instructions = '';

    for (let i = 0; i < textareas.length; i++) {
        const stepValue = textareas[i].value.trim();
        if (stepValue === '') {
            document.getElementById('instructionsError').textContent = 'Пожалуйста, введите шаги приготовления.';
            isValid = false;
            break; // Прерываем цикл, если хотя бы один шаг пустой
        }
        instructions += stepValue + '\n'; // Считываем значения и добавляем перенос строки
    }

    // Если нет шагов, выводим ошибку
    if (instructions.trim() === '') {
        document.getElementById('instructionsError').textContent = 'Пожалуйста, введите шаги приготовления.';
        isValid = false;
    }

    // Если форма не валидна, предотвратить отправку
    console.log(recipeName, ingredients, time, instructions);
    console.log(isValid);
    if (!isValid) {
        event.preventDefault(); // Предотвратить отправку формы
        alert('Данные не валидны');
    } else {
        showModal(recipeName, ingredients, time, instructions);
        event.preventDefault(); // Предотвратить отправку формы, если показываем модальное окно
    }

    function showModal(recipeName, ingredients, time, instructions) {
        const modal = document.getElementById("myModal");
        const modalContent = document.getElementById("modalContent");
        modalContent.innerHTML = `
            <strong>Название рецепта:</strong> ${recipeName}<br>
            <strong>Ингредиенты:</strong> ${ingredients}<br>
            <strong>Время приготовления:</strong> ${time} минут<br>
            <strong>Шаги приготовления:</strong> ${instructions}
        `;
        modal.style.display = "block"; // Показать модальное окно
    }
});