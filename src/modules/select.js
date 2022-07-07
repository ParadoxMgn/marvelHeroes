import { render } from './render';

const select = (arrCards, idList, idSelect, option) => {
  const selectUl = document.getElementById(idList);
  const selectHead = document.getElementById(idSelect);
  let selectArr = [];

  arrCards.forEach(item => {
    if (item[option] && Array.isArray(item[option])) {
      item[option].forEach(itemIn => {
        selectArr.push(itemIn);
      });
    }
    if (item[option] && !Array.isArray(item[option])) {
      selectArr.push(item[option].toLowerCase());
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

        if (item.classList.contains('def')) {
          selectHead.classList.remove('active');
        } else {
          selectHead.classList.add('active');
        }

        render(arrCards);
      }
    });
  });

};

export { select };