
const inputTextElement = document.querySelector('#name-input');
const outputTextElement = document.querySelector('#name-output');

inputTextElement.addEventListener('input', () => {
    inputTextElement.value === '' ?
        outputTextElement.textContent = 'незнакомец' :
        outputTextElement.textContent = inputTextElement.value;
});

// Вариант № 2 
// const refs = {
//     inputNameText: document.querySelector('#name-input'),
//     spanNameText: document.querySelector('#name-output'),
// };

// refs.inputNameText.addEventListener("input", onInputChange);

// function onInputChange(event) {
//     console.log(event.currentTarget.value);
//     refs.spanNameText.textContent = event.currentTarget.value;
// };

// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// < input type = "text" placeholder = "Ваше имя?" id = "name-input" />
//     <h1>Привет, <span id="name-output">незнакомец</span>!</h1>