// В HTML есть пустой список ul#ingredients.
/* <ul id="ingredients"></ul> */
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li
// за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const listRef = document.querySelector('#ingredients');

const ingredientsList = ingredients
  .map(el => {
    const listItem = document.createElement('li');
    listItem.textContent = el;
    return listItem;
  });

listRef.append(...ingredientsList); 

