


const classButtons = document.querySelectorAll('.class-btn');

// Обработчик клика на кнопке класса
classButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedClass = button.getAttribute('data-class');
        window.location.href = `class_${selectedClass}.html`; // Переход на соответствующую страницу класса
    });
});




