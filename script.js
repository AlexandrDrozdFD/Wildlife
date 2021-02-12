const slidesContainer = document.querySelector('.slides');
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');


let slides = [];
let currentPosition = 0;

const createSlide = (parent, content) => {
  const el = document.createElement('div');
  el.className = 'slide';
  el.innerHTML = content;
  parent.appendChild(el);
  return el;
}

const html = `
  <h4>Deer</h4>
`

for (let i = 1; i < 10; i++) {
  slides.push(createSlide(slidesContainer, html));
  }

btnLeft.addEventListener('click', () => {
  setPosition(currentPosition + 100);
});
btnRight.addEventListener('click', () => {
  setPosition(currentPosition - 100);
});

const setPosition = (position) => {
  if (position > 0) {
    return false;
  }
  if (position < - (slides.length - 3) * 100) {
    return false;
  }
  currentPosition = position;
  slides.forEach((slide) => slide.style.transform = `translateX(${currentPosition}%)`);
}
