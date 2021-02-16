const slidesContainer = document.querySelector('.slides');
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');

let slides = [];
let currentPosition = 0;

const DATA = [
  {
    name: 'deer', 
    image: './assets/images/latest-articles/deer.jpg',
    text: 'Naturalist investigation'
  },
  {
    name: 'squirrel', 
    image: './assets/images/latest-articles/squirrel.jpg',
    text: 'Kamikaze squirrels'
  },
  {
    name: 'bird', 
    image: './assets/images/latest-articles/bird.jpg',
    text: 'Birds Fight club'
  },
  {
    name: 'ladybug', 
    image: './assets/images/latest-articles/ladybug.jpg',
    text: 'Nice red white dotted Bug'
  },
  {
    name: 'mushroom', 
    image: './assets/images/latest-articles/mushroom.jpg',
    text: 'Not little mushroom'
  },
  {
    name: 'wolf', 
    image: './assets/images/latest-articles/wolf.jpg',
    text: 'Woooooooooooolf'
  }
]

const createSlide = (parent, content, data, index) => {
  const el = document.createElement('div');

  el.className = 'slide';
  el.style.backgroundImage = `url(${data[index].image})`;
  el.innerHTML = content;
  parent.appendChild(el);
  return el;
}

const createHTML = (data, index) => {
  return (
    ` <div class="slide__inner">
        <h4 class="slide__inner__caption">${data[index].name}</h4>
        <p class="slide__inner__text">${data[index].text}</p>
      </div> 
    `
  );
} 


for (let i = 0; i < 6; i++) {
  slides.push(createSlide(slidesContainer, createHTML(DATA, i), DATA, i));
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
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${currentPosition}%)`;
  });
};

