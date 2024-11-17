document.getElementById('serialForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get form elements
    const serialName = document.getElementById('serialName').value.trim();
    const description = document.getElementById('decsription').value.trim();
    const rating = document.getElementById('raiting').value;
    const year = document.getElementById('year').value;
    const checkboxes = document.querySelectorAll('.dropdown-content input[type="checkbox"]');
    
    // Validate fields
    let isValid = true;
    let errorMessage = '';

    // Check if serial name is provided
    if (!serialName) {
        isValid = false;
        errorMessage += 'Название обязательно.\n';
    }

    // Check if description is provided
    if (!description) {
        isValid = false;
        errorMessage += 'Описание обязательно.\n';
    }

    // Check if rating is a valid number
    if (!rating || rating <= 0 || rating >= 10) {
        isValid = false;
        errorMessage += 'Введите корректный рейтинг.\n';
    }

    // Check if year is a valid number
    if (!year || year < 1900 || year > new Date().getFullYear()) {
        isValid = false;
        errorMessage += 'Введите корректный год выхода.\n';
    }

    // Check if at least one checkbox is selected
    const isCheckboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    if (!isCheckboxChecked) {
        isValid = false;
        errorMessage += 'Выберите хотя бы один жанр.\n';
    }

    // Show error messages or submit the form
    if (!isValid) {
        alert(errorMessage);
    } else {
        // If valid, you can submit the form or perform further actions
        alert('Форма успешно отправлена!');
        // Uncomment the line below to actually submit the form
        // this.submit();
    }
});