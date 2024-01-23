export const getPeliculas = () => {
    const peliculas = localStorage.getItem('peliculas');
    return peliculas ? JSON.parse(peliculas) : [];
};

export const guardarPelicula = (pelicula) => {
    const peliculas = getPeliculas();
    peliculas.push(pelicula);
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
};

export const getPelicula = (id) => {
  const peliculas = getPeliculas();
  return peliculas.find(pelicula => pelicula.id === id) || null;
};

  
// Precargar películas en el localStorage
const peliculasPrecargadas = [
  {
    id: 1,
    titulo: 'El Padrino',
    director: 'Francis Ford Coppola',
    imageFile: 'https://i.pinimg.com/550x/9b/e3/d6/9be3d6579cbd1aa89a38f594cf7c1f53.jpg',
    descripcion: 'Una película de mafia clásica',
  },
  {
    id: 2,
    titulo: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    imageFile: 'https://m.media-amazon.com/images/S/pv-target-images/dbb9aff6fc5fcd726e2c19c07f165d40aa7716d1dee8974aae8a0dad9128d392.jpg',
    descripcion: 'Una historia de crimen y redención',
  },
  {
    id: 3,
    titulo: 'Forrest Gump',
    director: 'Robert Zemeckis',
    imageFile: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15829_v_v13_aa.jpg',
    descripcion: 'La vida es como una caja de chocolates',
  },
  {
    id: 4,
    titulo: 'Titanic',
    director: 'James Cameron',
    imageFile: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
    descripcion: 'Una historia de amor y tragedia en el mar',
  },
  {
    id: 5,
    titulo: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    imageFile: 'https://pics.filmaffinity.com/Cadena_perpetua-576140557-large.jpg',
    descripcion: 'Una historia de esperanza y redención en prisión',
  },
  {
    id: 6,
    titulo: 'The Godfather: Part II',
    director: 'Francis Ford Coppola',
    imageFile: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    descripcion: 'La continuación de El Padrino',
  },
  {
    id: 7,
    titulo: 'The Dark Knight',
    director: 'Christopher Nolan',
    imageFile: 'https://m.media-amazon.com/images/S/pv-target-images/57618417a0ddf3b7aa29db658bef2fc3b9608bb11a021631d3b6408441c1e0f7.jpg',
    descripcion: 'Batman enfrenta al Joker en Gotham City',
  },
  {
    id: 8,
    titulo: 'Schindler\'s List',
    director: 'Steven Spielberg',
    imageFile: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    descripcion: 'La historia de Oskar Schindler durante el Holocausto',
  },
  {
    id: 9,
    titulo: 'Inception',
    director: 'Christopher Nolan',
    imageFile: 'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg',
    descripcion: 'Un thriller de ciencia ficción sobre los sueños',
  },
  {
    id: 10,
    titulo: 'Fight Club',
    director: 'David Fincher',
    imageFile: 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    descripcion: 'Una historia sobre la alienación y el nihilismo',
  },
  {
    id: 11,
    titulo: 'The Matrix',
    director: 'The Wachowskis',
    imageFile: 'https://m.media-amazon.com/images/I/613ypTLZHsL._AC_UF894,1000_QL80_.jpg',
    descripcion: 'Un viaje a través de la realidad y la simulación',
  },
  {
    id: 12,
    titulo: 'Casablanca',
    director: 'Michael Curtiz',
    imageFile: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/CasablancaPoster-Gold.jpg',
    descripcion: 'Un clásico romance durante la Segunda Guerra Mundial',
  },
  {
    id: 13,
    titulo: 'The Silence of the Lambs',
    director: 'Jonathan Demme',
    imageFile: 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    descripcion: 'Un thriller psicológico con Hannibal Lecter',
  },
  {
    id: 14,
    titulo: 'Gone with the Wind',
    director: 'Victor Fleming',
    imageFile: 'https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    descripcion: 'Un épico del sur durante la Guerra Civil Americana',
  },
  {
    id: 15,
    titulo: 'Goodfellas',
    director: 'Martin Scorsese',
    imageFile: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    descripcion: 'Una historia de ascenso y caída en el crimen organizado',
  },
  {
    id: 16,
    titulo: 'The Green Mile',
    director: 'Frank Darabont',
    imageFile: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24429_p_v12_bf.jpg',
    descripcion: 'Una historia sobrenatural en una prisión',
  },
  {
    id: 17,
    titulo: 'The Usual Suspects',
    director: 'Bryan Singer',
    imageFile: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16422_v_v8_aa.jpg',
    descripcion: 'Un thriller con una sorprendente revelación',
  },
  {
    id: 18,
    titulo: 'One Flew Over the Cuckoo\'s Nest',
    director: 'Milos Forman',
    imageFile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9EKewiI74mOftP3Oztpoe68HIflT08cXksv1RcIroUgfvNEgPJZyz2V5f-m9CEvOJbU&usqp=CAU',
    descripcion: 'Una mirada a la vida en un hospital psiquiátrico',
  },
  {
    id: 19,
    titulo: 'The Lion King',
    director: 'Roger Allers, Rob Minkoff',
    imageFile: 'https://m.media-amazon.com/images/I/71VwCOzh9dL._AC_UF894,1000_QL80_.jpg',
    descripcion: 'Una épica animada sobre el ciclo de la vida',
  },
  {
    id: 20,
    titulo: 'Braveheart',
    director: 'Mel Gibson',
    imageFile: 'https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    descripcion: 'La historia de William Wallace y la independencia escocesa',
  },
];
  

  localStorage.clear();
  // Guardar cada película precargada en el localStorage
  peliculasPrecargadas.forEach((pelicula) => {
    guardarPelicula(pelicula);
  });
