
const fontSizeControlElement = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');


fontSizeControlElement.value = 16;

fontSizeControlElement.addEventListener('input', () => {
    textElement.style.fontSize = `${fontSizeControlElement.value}px`;
});