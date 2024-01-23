import { getPeliculas } from '../service/localStoreage.js';
import MovieCard from './MovieCard.jsx';
import styles from '../styles/AllMovies.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function AllMovies({ peliculas: propPeliculas }) {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const fetchPeliculas = async () => {
      const peliculasData = propPeliculas || getPeliculas();
      setPeliculas(peliculasData);
    };

    fetchPeliculas();
  }, [propPeliculas]);

  return (
    <Container fluid>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', textAlign: 'center' }}>
        {peliculas.map((pelicula) => (
          <MovieCard key={pelicula.id} pelicula={pelicula} />
        ))}
      </div>
    </Container>
  );
}