import { render } from "./render";

const reset = (arrCards) => {
  const btn = document.getElementById('btn');
  const selectHead1 = document.getElementById('select-head');
  const selectHead2 = document.getElementById('select-head2');
  const selectHead3 = document.getElementById('select-head3');
  const selectHead4 = document.getElementById('select-head4');

  btn.addEventListener('click', e => {
    if (e.target === btn) {
      selectHead1.innerText = 'Сhoose a movie';
      selectHead2.innerText = 'Сhoose a status';
      selectHead3.innerText = 'Сhoose a species';
      selectHead4.innerText = 'Сhoose a gender';

      render(arrCards);
    }
  });
};

export { reset };