import React, { useEffect, useState } from 'react';
import {getPelicula} from '../service/localStoreage.js';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button} from 'react-bootstrap';

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchPelicula = async () => {
        const pelicula = getPelicula(id);
        setMovie(pelicula);
      };
  
      fetchPelicula();
  }, [id]);

  if (!movie) {
    return <p>Cargando...</p>;
  }

  return (
      <Container fluid style={{textAlign: 'center'}}>
          <Row >
              <h1>Peliculas React</h1>
          </Row>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
              <Row>
                  <Col xs={12} md={6} className="text-center">
                      <Image src={movie.imageFile} style={{ width: '30%', height: 'auto'}} alt={movie.titulo} fluid />
                  </Col>
              </Row>
              <Row>
                  <Col>
                      <h2>{movie.titulo}</h2>
                      <p>{movie.descripcion}</p>
                      <br/>
                      <p>Director: {movie.director}</p>
                      <Link to="/">
                          <Button variant="primary">Volver al inicio</Button>
                      </Link>
                  </Col>
              </Row>
          </div>
      </Container>

  );
};

