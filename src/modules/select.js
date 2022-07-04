import { render } from './render';

const select = (arrCards) => {
  const selectUl = document.querySelector('.select');
  const selectHead = document.querySelector('.header__select-head');
  let selectArr = [];

  arrCards.forEach(item => {
    if (item.movies) {
      item.movies.forEach(move => {
        selectArr.push(move);
      });
    }
  });

  selectArr = selectArr.filter((item, index) => {
    return selectArr.indexOf(item.trim()) === index;
  });

  selectArr.sort().forEach(item => {
    selectUl.insertAdjacentHTML('beforeend', `<li id="${item}">${item}</li>`);
  });



  document.addEventListener('click', e => {
    e.preventDefault();
    const selectLi = selectUl.querySelectorAll('li');

    if (e.target === selectHead && selectUl.classList.contains('d-none')) {
      selectUl.classList.remove('d-none');
    } else {
      selectUl.classList.add('d-none');
    }

    selectLi.forEach(item => {
      if (e.target === item) {
        selectHead.innerText = item.innerText;

        render(arrCards, item.innerText);
      }
    });
  });

};

export { select };