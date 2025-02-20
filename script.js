// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Цей код виконається, коли HTML-документ повністю завантажений та розібраний

    // 1. Вивести alert повідомлення при завантаженні сторінки
    alert('Сторінка веб-сайту повністю завантажена!');

    // 2. Додати динамічний елемент на сторінку - відображення поточної дати
    const currentDate = new Date(); // Створюємо об'єкт Date з поточною датою та часом
    const dateString = currentDate.toLocaleDateString(); // Форматуємо дату в локалізований формат (наприклад, "12.08.2024")

    const dateParagraph = document.createElement('p'); // Створюємо новий елемент <p>
    dateParagraph.textContent = 'Сьогоднішня дата: ' + dateString; // Задаємо текст для нового абзацу
    dateParagraph.style.marginTop = '20px'; // Додаємо верхній відступ для нового абзацу (CSS стиль прямо в JavaScript для прикладу)
    dateParagraph.style.fontWeight = 'bold'; // Робимо текст жирним

    document.body.appendChild(dateParagraph); // Додаємо новий абзац в кінець елемента <body>
});
