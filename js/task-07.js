
const fontSizeControlElement = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');


fontSizeControlElement.value = 16;

fontSizeControlElement.addEventListener('input', () => {
    textElement.style.fontSize = `${fontSizeControlElement.value}px`;
});


// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

// < input id = "font-size-control" type = "range" />
// <br />
// <span id="text">Абракадабра!</span>