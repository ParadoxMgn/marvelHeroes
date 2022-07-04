import { animate } from './helper';
import { filter } from './filter';

const render = (arrCards, select = "Сhoose a movie") => {
  const cardsList = document.getElementById('cards__list');
  let countAnim = 0;
  let id;

  const rendCards = () => {
    cardsList.innerHTML = '';
    let count = 0;

    arrCards.forEach(item => {
      if (filter(item, select)) {
        return;
      }

      cardsList.insertAdjacentHTML('beforeend', `<li class="cards__item card${count}">
      <div class="cards__img"><img src="${item.photo}"></div>
      <div class="cards__nickname">${item.name}</div>
      <div class="cards__name"><span>Actor : </span>${item.actors}</div>
      <div class="cards__mov">Movies:
      <ul class="cards__movies mov${count}"></ul>
      </div>
      <div class="cards__status status${count}">${item.status}</div>
      </li>`);

      if (item.movies) {
        item.movies.forEach(move => {
          document.querySelector(`.mov${count}`).insertAdjacentHTML('beforeend',
            `<li class="${move.trim() === select ? 'active' : ''}">${move}</li>`);
        });
      }

      if (item.status && item.status === 'alive') {
        document.querySelector(`.status${count}`).style.color = 'green';
      }

      if (item.status && item.status === 'unknown') {
        document.querySelector(`.status${count}`).style.color = 'gray';
      }

      count++;
    });
  };

  const animRender = () => {
    const currentLi = cardsList.querySelector(`.card${countAnim}`);
    const cardsItem = cardsList.querySelectorAll('.cards__item');

    if (countAnim !== 0) {
      cardsList.querySelector(`.card${countAnim - 1}`).style.opacity = 1;
    }

    animate({
      duration: 80,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        currentLi.style.opacity = progress;
      }
    });

    countAnim++;

    if (countAnim === cardsItem.length) {
      clearInterval(id);
    }
  };

  rendCards();
  id = setInterval(animRender, 100);
};

export { render };