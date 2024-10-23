function addStep() {
        const stepsContainer = document.getElementById('stepsContainer');
        const newStep = document.createElement('input');
        newStep.rows = 2;
        newStep.placeholder = "Следующий шаг";
        stepsContainer.appendChild(newStep);
}