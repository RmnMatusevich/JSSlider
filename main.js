const next = document.querySelector(".next");
const prev = document.querySelector(".previous");
const slider = document.querySelector(".slide");

let width = 800;
let position = 0;
next.addEventListener('click', function () {
    position -= width;
    slider.style.marginLeft = position + 'px';
    if (slider.style.marginLeft === '-2400px') {
        position = 0;
        slider.style.marginLeft = '0px';

    }
});

prev.addEventListener('click', function () {
    position += width;
    slider.style.marginLeft = position + 'px';
    if (slider.style.marginLeft > '0px') {
        position = -1600;
        slider.style.marginLeft = '-1600px';

    }
});
