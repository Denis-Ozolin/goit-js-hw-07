// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const categoryListRef = document.querySelector("#categories");
const categoryItemsRefs = document.querySelectorAll('#categories li.item');

const categoryListLength = categoryListRef.children.length;
console.log(`В списке ${categoryListLength} категории.`);

categoryItemsRefs.forEach(el => {
    console.log(`Категория: ${el.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${el.lastElementChild.children.length}`);
})

//---------------------------------------------------------------   
// const categoryListRef = document.querySelector("#categories");
// const categoryItemsRefs = document.querySelectorAll('#categories li.item');
// const categoryListLength = categoryListRef.children.length;

// const categoryInfo = [...categoryItemsRefs]
//     .map(el => `\nКатегория: ${el.firstElementChild.textContent}` +
// `\nКоличество элементов: ${el.lastElementChild.children.length}\n`);

// console.log(`В списке ${categoryListLength} категории.`);
// console.log(...categoryInfo);

//---------------------------------------------------------------
// const categoryListRef = document.querySelector("#categories");
// const categoriesRef = categoryListRef.children;
// const animals = categoryListRef.firstElementChild;
// const products = animals.nextElementSibling;
// const technologies = categoryListRef.lastElementChild;
// const categoriesArray = [animals, products, technologies];

// const logCategories = item => 
// console.log(`Категория: ${item.firstElementChild.textContent} 
// Количество элементов: ${item.firstElementChild.nextElementSibling
// .children.length}`);

// const logFunc = arr => arr.forEach(el => logCategories(el));

// console.log(`В списке ${categoriesRef.length} категории.`);
// logFunc(categoriesArray);









