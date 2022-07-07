import { render } from './render';
import { select } from './select';

const getData = () => {
  fetch('./db/dbHeroes.json')
    .then(response => response.json())
    .then(data => {
      select(data);
      render(data);
    })
    .catch(err => console.log(err));
};

export { getData };

