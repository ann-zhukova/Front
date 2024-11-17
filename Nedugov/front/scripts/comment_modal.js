document.getElementById('publishButton').addEventListener('click', function() {
    // Показать модальное окно
    document.getElementById('modal').style.display = 'block';
});

document.querySelector('.close-button').addEventListener('click', function() {
    // Закрыть модальное окно
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('submitComment').addEventListener('click', function() {
    const comment = document.getElementById('modalComment').value;
    if (comment) {
        alert('Ваш комментарий: ' + comment);
        // Здесь можно добавить код для отправки комментария на сервер
        document.getElementById('modal').style.display = 'none'; // Закрыть модальное окно
        document.getElementById('modalComment').value = ''; // Очистить текстовое поле
    } else {
        alert('Пожалуйста, напишите комментарий.');
    }
});

// Закрыть модальное окно при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};