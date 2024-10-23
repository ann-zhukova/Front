document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('scrollContainer');
    
    document.getElementById('scrollRightButton').addEventListener('click', function() {
        container.scrollLeft += 200; // Прокручиваем вправо на 100 пикселей
    });

    document.getElementById('scrollLeftButton').addEventListener('click', function() {
        container.scrollLeft -= 200; // Прокручиваем влево на 100 пикселей
    });
});
