// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его текущее
// значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const inputNameRef = document.querySelector('input#name-input');
const outputNameRef = document.querySelector('span#name-output');

function onOutputText(event){
 outputNameRef.textContent = event.target.value;
      if (!event.target.value) {
        outputNameRef.textContent = 'незнакомец';
    }
}

inputNameRef.addEventListener('input', onOutputText);



