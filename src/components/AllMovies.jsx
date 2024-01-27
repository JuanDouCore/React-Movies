import { getPeliculas } from '../service/localStoreage.js';
import MovieCard from './MovieCard.jsx';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const ITEMS_PER_PAGE = 7;

export default function AllMovies({ peliculas: propPeliculas }) {
  const [peliculas, setPeliculas] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    setTimeout(() => {
      const peliculasData = propPeliculas || getPeliculas();
      const newMovies = peliculasData.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

      if (newMovies.length === 0) {
        setHasMore(false);
      } else {
        setPeliculas((prevMovies) => [...prevMovies, ...newMovies]);
        setPage((prevPage) => prevPage + 1);
      }
    }, 500);
  };

  useEffect(() => {
    fetchMoreData();
  }, []); 

  return (
    <Container fluid>
      <InfiniteScroll
        dataLength={peliculas.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Cargando...</h4>}
        endMessage={<p>No hay más películas</p>}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', textAlign: 'center' }}>
          {peliculas.map((pelicula) => (
            <MovieCard key={pelicula.id} pelicula={pelicula} />
          ))}
        </div>
      </InfiniteScroll>
    </Container>
  );
}
