import { animate } from './helper';

const render = (arrCards) => {
  const cardsList = document.getElementById('cards__list');
  const selectHead = document.getElementById('select-head');
  const selectHead2 = document.getElementById('select-head2');
  const selectHead3 = document.getElementById('select-head3');
  const selectHead4 = document.getElementById('select-head4');
  let countAnim = 0;
  let id;

  const filter = (item, select, option) => {
    let bool = false;

    if (select !== 'Сhoose a species' && select !== 'Сhoose a gender' && select !== 'Сhoose a movie' && select !== 'Сhoose a status' && !item[option]) {
      bool = !bool;
    }

    if (select !== 'Сhoose a species' && select !== 'Сhoose a gender' && select !== 'Сhoose a movie' && select !== 'Сhoose a status' && item[option]) {
      bool = !bool;
      if (Array.isArray(item[option])) {
        item[option].forEach(itemIn => {
          if (select.toLowerCase() === itemIn.toLowerCase().trim()) {
            bool = !bool;
          }
        });
      } else {
        if (select.toLowerCase() === item[option].toLowerCase().trim()) {
          bool = !bool;
        }
      }
    }

    // localStorage.setItem('user', JSON.stringify(todoData));
    return bool;
  };

  const rendCards = () => {
    cardsList.innerHTML = '';
    let count = 0;

    arrCards.forEach(item => {
      if (filter(item, selectHead.innerText, 'movies')) {
        return;
      }

      if (filter(item, selectHead2.innerText, 'status')) {
        return;
      }

      if (filter(item, selectHead3.innerText, 'species')) {
        return;
      }

      if (filter(item, selectHead4.innerText, 'gender')) {
        return;
      }

      cardsList.insertAdjacentHTML('beforeend', `<li class="cards__item card${count}">
      <div class="cards__img"><img src="${item.photo}"></div>
      <div class="cards__nickname">${item.name}</div>
      <div class="cards__name"><span>Actor : </span>${item.actors}</div>
      <div class="cards__mov">Movies:
      <ul class="cards__movies mov${count}"></ul>
      </div>
      <div class="cards__species species${count}">${item.species}</div>
      <div class="cards__gender gender${count}">${item.gender}</div>
      <div class="cards__status status${count}">${item.status}</div>
      </li>`);

      if (item.movies) {
        item.movies.forEach(move => {
          document.querySelector(`.mov${count}`).insertAdjacentHTML('beforeend',
            `<li>${move}</li>`);
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

    if (!currentLi) {
      clearInterval(id);
      return;
    }

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

    document.addEventListener('click', e => {
      document.querySelectorAll('.select>li').forEach(item => {
        if (e.target === item) {
          clearInterval(id);
        }
      });
    });
    if (countAnim === cardsItem.length) {
      clearInterval(id);
    }
  };

  rendCards();
  id = setInterval(animRender, 100);
};

export { render };