function addStep() {
        const stepsContainer = document.getElementById('stepsContainer');
        const newStep = document.createElement('textarea');
        newStep.rows = 2;
        newStep.placeholder = "Следующий шаг";
        stepsContainer.appendChild(newStep);
}