const filter = (item, select) => {
  let bool = false;

  if (select !== 'Сhoose a movie' && !item.movies) {
    bool = !bool;
  }

  if (select !== 'Сhoose a movie' && item.movies) {
    bool = !bool;
    item.movies.forEach(movie => {
      if (select === movie.trim()) {
        bool = !bool;
      }
    });
  }

  return bool;
};

export { filter };