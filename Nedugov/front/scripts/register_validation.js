 document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get values from the form
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validate username
        if (username.length < 3) {
            alert('Имя пользователя должно содержать не менее 3 символов.');
            return;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Пожалуйста, введите действительный адрес электронной почты.');
            return;
        }

        // Validate password
        if (password.length < 6) {
            alert('Пароль должен содержать не менее 6 символов.');
            return;
        }

        // If all validations pass, submit the form
        alert('Форма успешно отправлена!');
        // Here you can add code to actually submit the form, e.g., using AJAX or redirecting
        // this.submit(); // Uncomment this line to submit the form
    });