import { render } from './render';
import { select } from './select';
import { reset } from './reset';

const getData = () => {
  fetch('./db/dbHeroes.json')
    .then(response => response.json())
    .then(data => {
      select(data, 'select', 'select-head', 'movies');
      select(data, 'select2', 'select-head2', 'status');
      select(data, 'select3', 'select-head3', 'species');
      select(data, 'select4', 'select-head4', 'gender');
      render(data);
      reset(data);
    })
    .catch(err => console.log(err));
};

export { getData };

