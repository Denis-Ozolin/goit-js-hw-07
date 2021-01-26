// Счетчик состоит из спана и кнопок,
// которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const showCounterRef = document.querySelector('#value');
let counterValue = Number(showCounterRef.textContent);

const increment = () => {
  counterValue += 1;
  showCounterRef.textContent = counterValue;
}

const decrement = () => {
  counterValue -= 1;
   showCounterRef.textContent = counterValue;
};

incrementBtnRef.addEventListener('click', increment);
decrementBtnRef.addEventListener('click', decrement);


