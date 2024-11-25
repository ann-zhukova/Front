document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('scrollContainer');
    
    // Определяем ширину элемента для прокрутки
    const scrollAmount = container.clientWidth * 0.25 + 16; // 25% ширины контейнера + 32px

    document.getElementById('scrollRightButton').addEventListener('click', function() {
        container.scrollLeft += scrollAmount; 
    });

    document.getElementById('scrollLeftButton').addEventListener('click', function() {
        container.scrollLeft -= scrollAmount; 
    });
});
