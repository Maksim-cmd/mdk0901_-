//Задание 1
let books = document.querySelectorAll('.book');
books[1].style.order = '-1';
books[2].style.order = '2';
books[3].style.order = '1';
books[5].style.order = '1';

//Задание 2
document.body.style.backgroundImage = 'url("image/scale_1200.jpg")';

//Задание 4
document.querySelector('.adv').remove();

//Задание 3
books[4].querySelector('h2>a').textContent = 'Книга 3. this и Прототипы Объектов';

//Задание 6
books[2].querySelector('ul').append(document.createElement('li').textContent='Глава 8: За пределами ES6');