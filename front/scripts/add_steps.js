function addStep() {
        const stepsContainer = document.getElementById('stepsContainer');
        const newStep = document.createElement('textarea');
        newStep.rows = 4;
        newStep.className = 'step-textarea';
        stepsContainer.appendChild(newStep);
}

function closeModal() {
        const modal = document.getElementById("myModal");
        modal.style.display = "none"; // Скрыть модальное окно
    }