document.addEventListener('DOMContentLoaded', function() {
const header = document.querySelector('header');
const button = document.querySelector('#changeColorButton');

button.addEventListener('click', function() {
    header.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
});
