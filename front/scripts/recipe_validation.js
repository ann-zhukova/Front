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
    const ingredientsError = document.getElementById('ingredientsError');

    // Проверка на пустое значение
    if (ingredients === '' || ingredientsArray.length === 0 || ingredientsArray.some(item => item === '')) {
        ingredientsError.textContent = 'Пожалуйста, введите хотя бы одно слово или ингредиенты через точку с запятой.';
        isValid = false;
    } else {
        // Регулярное выражение для проверки формата "ингредиент - количество"
        const ingredientPattern = /^[^\-;]+ - [^\-;]+$/; // Количество может быть любым текстом

        // Проверка каждого ингредиента на соответствие формату
        for (const item of ingredientsArray) {
            if (!ingredientPattern.test(item)) {
                ingredientsError.textContent = 'Ингредиенты должны быть в формате: ингредиент - количество; ингредиент - количество;';
                isValid = false;
                break;
            }
        }
    }

    // Валидация времени приготовления
    const time = document.getElementById('time').value;
    if (time <= 0) {
        document.getElementById('timeError').textContent = 'Время приготовления должно быть положительным числом.';
        isValid = false;
    }
    // валидация типа блюда
    const dishType = document.getElementById("dishType").value;
    const dishTypeError = document.getElementById("dishTypeError");

    // Проверка на пустое значение
    if (!dishType.trim()) {
        dishTypeError.textContent = "Пожалуйста, введите хотя бы один тип блюда.";
        event.preventDefault(); // предотвращает отправку формы
    } else {
        // Проверка на корректный формат (разделение запятыми)
        const types = dishType.split(',').map(type => type.trim());
        if (types.length === 0 || types.some(type => type === "")) {
            dishTypeError.textContent = "Пожалуйста, убедитесь, что типы блюда разделены запятыми и не пустые.";
            isValid = false;
        } else {
            dishTypeError.textContent = ""; // очищает сообщение об ошибке
        }
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
        instructions += stepValue + '\n'; 
    }

    // Если нет шагов, выводим ошибку
    if (instructions.trim() === '') {
        document.getElementById('instructionsError').textContent = 'Пожалуйста, введите шаги приготовления.';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); 
        alert('Данные не валидны');
    } else {
        showModal(recipeName, ingredients, time, instructions, dishType);
        event.preventDefault(); 
    }

    function showModal(recipeName, ingredients, time, instructions, dishType) {
        const modal = document.getElementById("myModal");
        const modalContent = document.getElementById("modalContent");
        modalContent.innerHTML = `
        <p>
            <strong>Название рецепта:</strong> ${recipeName}<br>
            <strong>Ингредиенты:</strong> ${ingredients}<br>
            <strong>Время приготовления:</strong> ${time} минут<br>
            <strong>Шаги приготовления:</strong> ${instructions}<br>
            <strong>Тип блюда:</strong> ${dishType}
        </p>    
        `;
        modal.style.display = "block"; // Показать модальное окно
    }
});