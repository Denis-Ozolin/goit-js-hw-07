// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и
// нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount),
// которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в
// amount и добавляет их в div#boxes.

// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого,
// должен быть шире и выше предыдущего на 10px

// Создай функцию destroyBoxes(), которая очищает div#boxes.

const boxContainerRef = document.querySelector('div#boxes');
const inputAmountRef = document.querySelector('#controls > input');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
let size = 20;

renderBtnRef.addEventListener('click', function () {
    createBoxes(Number(inputAmountRef.value));
});

destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    const amountArray = [...new Array(amount)];
    const nextBoxes = amountArray.map(el => { 
        size += 10;
        el = document.createElement('div');
        el.classList.add('inner-box');
        el.style.backgroundColor = randomColor();
        el.style.width = size + 'px';
        el.style.height = size + 'px';
        
        return el;
    });

    boxContainerRef.append(...nextBoxes);
}

function destroyBoxes() {
    size = 20;
    [...boxContainerRef.children].forEach(el => el.remove());
    inputAmountRef.value = null;  
}

// Эту функцию нашел в интернете :)
function randomColor() {
let color = Math.floor(Math.random() * 16777216).toString(16);
return '#000000'.slice(0, -color.length) + color;
}

//РЕШЕНИЕ ДО ИСПРАВЛЕНИЯ ОШИБОК

// const boxContainerRef = document.querySelector('div#boxes');
// const inputAmountRef = document.querySelector('#controls > input');
// const renderBtnRef = document.querySelector('button[data-action="render"]');
// const destroyBtnRef = document.querySelector('button[data-action="destroy"]');

//Пришлось гуглить, как добавить callback с аргументом.
// renderBtnRef.addEventListener('click', function () {
//     createBoxes(Number(inputAmountRef.value));
// });
// destroyBtnRef.addEventListener('click', destroyBoxes);

// function createBoxes(amount) {
//     const amountArray = [...new Array(amount)];
//     let size = 30;
   
//     const boxes = amountArray.map((el, index) => {  
//         el = document.createElement('div');
//         el.classList.add('inner-box');
//         el.style.backgroundColor = randomColor();
        
//         if (index === 0) {       
//             el.style.width = size + 'px';
//             el.style.height = size + 'px';
//         } else {
//             size += 10;
//             el.style.width = size + 'px';
//             el.style.height = size + 'px';
//         }
//         return el;
//     });
//     boxContainerRef.append(...boxes);
// }

// function destroyBoxes() {
//     [...boxContainerRef.children].forEach(el => el.remove());
//     inputAmountRef.value = null;
// }

// // Эту функцию нашел в интернете :)
// function randomColor() {
// let color = Math.floor(Math.random() * 16777216).toString(16);
// return '#000000'.slice(0, -color.length) + color;
// }



